from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets
from app.api.blog.serializers import BlogSerializer
from app.api.blog.models import BlogPost
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



class BlogViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny,)

    @action(detail=False, methods=["post"])
    def create_blog(self, request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            blog = serializer.save()
            if blog:
                return Response({'message': 'Blog created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["get"])
    def get_blogs(self, request):
        offset = request.query_params.get('offset', 0)
        limit = request.query_params.get('limit', 10)

        try:
            offset = int(offset)
            limit = int(limit)
        except ValueError:
            return Response({'error': 'Invalid offset or limit'}, status=status.HTTP_400_BAD_REQUEST)

        blogs = BlogPost.objects.all().order_by('-created_at')
        paginator = Paginator(blogs, limit)

        try:
            current_page = offset // limit + 1
            blogs_page = paginator.page(current_page)
        except (EmptyPage, PageNotAnInteger):
            blogs_page = []

        blog_serializer = BlogSerializer(blogs_page, many=True)


        return Response(blog_serializer.data, status=status.HTTP_200_OK)



    @action(detail=False, methods=["get"])
    def get_blog(self, request, pk=None):
        try:
            blog = BlogPost.objects.get(pk=pk)
        except BlogPost.DoesNotExist:
            return Response({'message': 'Blog not found'}, status=status.HTTP_404_NOT_FOUND)
        blog_serializer = BlogSerializer(blog)
        return Response(blog_serializer.data)
