from portfolio_app.services import (
    get_full_static_path,
    get_files_amount_inside_folder
)


class Project:
    """Handles existing projects."""
    def __init__(self, project_id: int) -> None:
        self.__project_id = project_id

    # TODO. Write tests here.
    def get_pictures_amount(self, app_name: str) -> int:
        """Returns amount of pictures which describes the current project."""
        static_path = get_full_static_path(app_name)
        pictures_folder_path = static_path + "/imgs/projects/" + str(self.__project_id)
        all_pictures_amount = get_files_amount_inside_folder(pictures_folder_path)
        pictures_without_cover_amount = all_pictures_amount - 1
        return pictures_without_cover_amount

    # TODO. Write tests here.
    @staticmethod
    def get_amount(app_name: str):
        """Returns amount of the projects."""
        static_path = get_full_static_path(app_name)
        projects_folder_path = static_path + "/language/templates-translation/projects"
        projects_amount = get_files_amount_inside_folder(projects_folder_path)
        return projects_amount 
