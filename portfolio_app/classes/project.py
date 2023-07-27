from portfolio_app.services import (
    get_full_static_path,
    get_files_amount_inside_folder
)


class Project:
    """Handles existing projects."""

    def __init__(self, project_id: int) -> None:
        self.__project_id = project_id

    def get_pictures_amount(self, pictures_folder_path: str) -> int:
        """Returns amount of pictures which describes the current project."""
        full_pictures_folder_path = pictures_folder_path + str(self.__project_id)
        all_pictures_amount = get_files_amount_inside_folder(full_pictures_folder_path)
        pictures_without_cover_amount = all_pictures_amount - 1
        return pictures_without_cover_amount

    @staticmethod
    def get_amount(projects_folder_path: str):
        """Returns amount of the projects."""
        projects_amount = get_files_amount_inside_folder(projects_folder_path)
        return projects_amount
