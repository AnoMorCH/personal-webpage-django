"""A special script to store supportive functions."""
import os

from portfolio_project.settings import BASE_DIR, STATIC_URL


# TODO. Test it.
def get_full_static_path(app_name: str) -> str:
    """Returns full path of a static folder of the project (including the
    directory where the project itself is stored.)"""
    static_path = str(BASE_DIR) + "/" + app_name + STATIC_URL + app_name
    return static_path


# TODO. Test it.
def get_files_amount_inside_folder(folder_path: str) -> str:
    """Returns amount of files inside a folder."""
    amount = len([name for name in os.listdir(folder_path)
                 if os.path.isfile(os.path.join(folder_path, name))])
    return amount
