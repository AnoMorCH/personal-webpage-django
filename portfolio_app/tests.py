import os
import json
import shutil

from django.test import TestCase

from portfolio_app.classes.current_static_path import CurrentStaticPath
from portfolio_app.classes.project import Project
from portfolio_project.settings import BASE_DIR, STATIC_URL
from portfolio_app.services import (
    get_current_app_name,
    get_full_static_path,
    get_files_amount_inside_folder
)


TEST_PATH = os.getcwd() + "/test/"


class BasicFunctions:
    def _create_two_dump_files_and_folder(self, path: str) -> None:
        os.mkdir(path)
        os.mknod(path + "1.txt")
        os.mknod(path + "2.txt")

    def _delete_folder(self, path: str) -> None:
        shutil.rmtree(path, ignore_errors=True)


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
        actual_value = self.current_static_path._CurrentStaticPath__get_path()
        self.assertEqual(self.expected_path, actual_value)
        self.assertEqual(type(actual_value), str)

    def test_private_get_response(self):
        actual_value = self.current_static_path._CurrentStaticPath__get_response()
        self.assertEqual(self.expected_response["path"], actual_value["path"])
        self.assertEqual(self.expected_response["status"], 
                         actual_value["status"])
        self.assertEqual(type(actual_value), dict)

    def test_get_json_response(self):
        expected_value = json.dumps(self.expected_response, indent=4)
        actual_value = self.current_static_path.get_json_response()
        self.assertEqual(expected_value, actual_value)
        self.assertEqual(type(expected_value), type(actual_value))


class ServicesTests(TestCase, BasicFunctions):
    app_name = "portfolio_app"

    def test_get_current_app_name(self):
        actual_value = get_current_app_name()
        self.assertEqual(self.app_name, actual_value)
        self.assertEqual(type(self.app_name), type(actual_value))

    def test_get_full_static_path(self):
        expected_value = str(BASE_DIR) + "/" + self.app_name + STATIC_URL \
            + self.app_name
        actual_value = get_full_static_path(self.app_name)
        self.assertEqual(expected_value, actual_value)
        self.assertEqual(type(expected_value), type(actual_value))

    def test_get_files_amount_inside_folder(self):
        self._create_two_dump_files_and_folder(TEST_PATH)
        actual_value = get_files_amount_inside_folder(TEST_PATH)
        expected_value = 2
        self.assertEqual(expected_value, actual_value)
        self.assertEqual(type(expected_value), type(actual_value))
        self._delete_folder(TEST_PATH)


class ProjectClassTest(TestCase, BasicFunctions):
    def setUp(self) -> None:
        self._create_two_dump_files_and_folder(TEST_PATH)

    def tearDown(self) -> None:
        self._delete_folder(TEST_PATH)

    def test_get_amount(self):
        actual_value = Project.get_amount(TEST_PATH)
        expected_value = 2
        self.assertEqual(expected_value, actual_value)
        self.assertEqual(type(expected_value), type(actual_value))

    def test_get_pictures_amount(self):
        project_number = 1
        full_project_path = TEST_PATH + str(project_number) + "/"
        self._create_two_dump_files_and_folder(full_project_path)
        actual_value = Project(project_number).get_pictures_amount(TEST_PATH)
        expected_value = 1 
        self.assertEqual(expected_value, actual_value)
        self.assertEqual(type(expected_value), type(actual_value)) 
    