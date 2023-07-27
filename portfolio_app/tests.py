import json

from django.test import TestCase

from portfolio_app.classes.current_static_path import CurrentStaticPath
from portfolio_project.settings import BASE_DIR, STATIC_URL
from portfolio_app.services import (
    get_current_app_name,
    get_full_static_path
)


class CurrentStaticPathTests(TestCase):
    app_name = "my_app"
    static_path = "/static_path/"
    expected_path = "/static_path/my_app/"
    current_static_path = CurrentStaticPath(app_name, static_path)
    expected_response = {
        "path": expected_path,
        "status": 200
    }

    def test_private_get_path(self):
        actual_path = self.current_static_path._CurrentStaticPath__get_path()
        self.assertEqual(self.expected_path, actual_path)
        self.assertEqual(type(actual_path), str)

    def test_private_get_response(self):
        actual_response = self.current_static_path._CurrentStaticPath__get_response()
        self.assertEqual(
            self.expected_response["path"], actual_response["path"])
        self.assertEqual(
            self.expected_response["status"], actual_response["status"])
        self.assertEqual(type(actual_response), dict)

    def test_get_json_response(self):
        expected_json_response = json.dumps(self.expected_response, indent=4)
        actual_json_response = self.current_static_path.get_json_response()
        self.assertEqual(expected_json_response, actual_json_response)
        self.assertEqual(type(expected_json_response),
                         type(actual_json_response))


class ServicesTests(TestCase):
    app_name = "portfolio_app"

    def test_get_current_app_name(self):
        actual_app_name = get_current_app_name()
        self.assertEqual(self.app_name, actual_app_name)
        self.assertEqual(type(self.app_name), type(actual_app_name))

    def test_get_full_static_path(self):
        expected_full_static_path = str(BASE_DIR) + "/" + self.app_name \
                                    + STATIC_URL + self.app_name
        actual_full_static_path = get_full_static_path(self.app_name)
        self.assertEqual(expected_full_static_path, actual_full_static_path)
        self.assertEqual(type(expected_full_static_path),
                         type(actual_full_static_path))
