from rest_framework.routers import DefaultRouter
from .views import TodosViewSet


router = DefaultRouter()
router.register("api/todos", TodosViewSet, "todos")

urlpatterns = router.urls
