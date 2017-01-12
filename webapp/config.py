import argparse

config_values = {
    'default_editor': '/python/edit',
    'disable_editor_button': True,
    'python_file': '../runapp/run_clock.py',
    'blocks_file': '../runapp/blocks_clock.xml',
    'audio_files': '../runapp/audio',
    'backup_files': '../runapp/backups',
    'lesson_files': '../runapp/lessons',
    'file_filter': ['README.md', '.DS_Store'],
    'buttons_gpio': [4, 5],
    'switches_gpio': [6]
}

class Configuration(object):
    def __init__(self):
        parser = argparse.ArgumentParser()
        args, _ = parser.parse_known_args()

    def get(self, name):
        return config_values.get(name)

configuration = Configuration()
