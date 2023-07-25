from django.urls import path

from portfolio_app import views


app_name = "portfolio_app"

urlpatterns = [
    path("", views.index, name="index_page"),
    path("about-me/", views.about_me, name="about_me_page"),
    path("get_current_static_path/", views.get_current_static_path, name="current_static_path_page")
]
