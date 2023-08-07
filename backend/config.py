class Config(object):
    DEBUG = False
    TESTING = False
    # Any other global configs

class DevelopmentConfig(Config):
    DEBUG = True
    # Other development-specific configs

class TestingConfig(Config):
    TESTING = True
    # Other testing-specific configs, like a different database

# class ProductionConfig(Config):
#     # Production-specific configurations
