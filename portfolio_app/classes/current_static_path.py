import json


class CurrentStaticPath:
    """
    Handles work with current static path (as creation of API response or 
    fetching the path).
    """
    def __init__(self, app_name: str, static_path: str) -> None:
        self.__app_name = app_name
        self.__static_path = static_path

    def get_json_response(self) -> str:
        """Return the current static path as JSON API response."""
        response = self.__get_response()
        return json.dumps(response, indent=4)

    def __get_response(self) -> dict:
        """Returns the current static path as a response for API."""
        dict_answer = {
            "path": self.__get_path(),
            "status": 200
        }
        return dict_answer
    
    def __get_path(self) -> str:
        """Returns the current static path (static path + app name)"""
        path = self.__static_path + self.__app_name + "/"
        return path