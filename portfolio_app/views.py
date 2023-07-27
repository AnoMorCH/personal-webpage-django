from django.http import HttpResponse, HttpRequest
from django.shortcuts import render

from portfolio_app.classes.current_static_path import CurrentStaticPath
from portfolio_app.classes.project import Project
from portfolio_app.services import get_current_app_name
from portfolio_project.settings import STATIC_URL


def index(request: HttpRequest) -> HttpResponse:
    """Implements index.html template."""
    return render(request, "portfolio_app/index.html")


def about_me(request: HttpRequest) -> HttpResponse:
    """Implements about-me.html template."""
    return render(request, "portfolio_app/about-me.html")


def projects(request: HttpRequest) -> HttpResponse:
    """Implements projects.html template."""
    app_name = get_current_app_name() 
    projects_amount = Project.get_amount(app_name)
    context = {"projects_amount": [*range(1, projects_amount + 1)]}
    return render(request, "portfolio_app/projects.html", context)


def current_project(request: HttpRequest, project_id: int) -> HttpResponse:
    """Implements current-project.html template."""
    app_name = get_current_app_name() 
    project_pictures_amount = Project(project_id).get_pictures_amount(app_name)
    context = {
        "project_id": project_id,
        "project_pictures_amount": [*range(1, project_pictures_amount + 1)]
    }
    return render(request, "portfolio_app/current-project.html", context)


def get_current_static_path(request: HttpRequest) -> HttpResponse:
    """Returns a name of current static folder directory."""
    app_name = get_current_app_name() 
    current_static_path = CurrentStaticPath(app_name, STATIC_URL)
    json_answer = current_static_path.get_json_response()
    return HttpResponse(json_answer)
