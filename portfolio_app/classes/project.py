from portfolio_app.services import (
    get_full_static_path,
    get_files_amount_inside_folder
)


class Project:
    """Handles existing projects."""

    # TODO. Write tests here.
    @staticmethod
    def get_amount(app_name):
        """Returns amount of the projects."""
        static_path = get_full_static_path(app_name)
        projects_folder_path = static_path + "/language/templates-translation/projects"
        return get_files_amount_inside_folder(projects_folder_path)
