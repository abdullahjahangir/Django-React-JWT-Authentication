from rest_framework import viewsets, permissions
from .serializers import TodosSerializer


class TodosViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TodosSerializer

    def get_queryset(self):
        return self.request.user.Todos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
