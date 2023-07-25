from django.http import HttpResponse, HttpRequest
from django.shortcuts import render

from portfolio_app.classes.current_static_path import CurrentStaticPath
from portfolio_project.settings import STATIC_URL


def index(request: HttpRequest) -> HttpResponse:
    """Implements index.html template."""
    return render(request, "portfolio_app/index.html")


def about_me(request: HttpRequest) -> HttpResponse:
    """Implements about-me.html template."""
    return render(request, "portfolio_app/about-me.html")


def get_current_static_path(request: HttpRequest) -> HttpResponse:
    """Return a name of current static folder directory."""
    current_static_path = CurrentStaticPath(
        request.resolver_match.app_name,
        STATIC_URL
    )
    json_answer = current_static_path.get_json_response()
    return HttpResponse(json_answer)
