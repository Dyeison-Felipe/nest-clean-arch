"jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": [
        "ts-jest",
        {
          "tsconfig": "tsconfig.test.json"
        }
      ]
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/$1"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!@faker-js/faker)"
    ],
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }