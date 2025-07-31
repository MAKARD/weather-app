# Launch

### Prerequisites

The following lists of dependencies is not a mandatory but it ensures seamless application start:

- `node` >= `18`
- `java` = `17.0.x`
- `ruby` => `2.6.10`
- `yarn` = `4.x.x`
- `xcode` = `16.x`
- `xcode build` = `16B40`
- `bundler` = 2.4.13

### Sequence

- Create `root-of-repository/env/.env.development` file
- Populate the file with key-value pairs. Required keys are listed in `root-of-repository/env/.env.example` file.
- run in terminal from the root of repository 
```
bundle install
```
- run in terminal from the root of repository
```
cd ios && bundle exec pod install && cd ..
```
- run in terminal from the root of repository
```
yarn start --reset-cache
```
- run in second terminal from the root of repository one of the commands:
```
yarn ios
```

```
yarn android
```

# Integrations

The application uses [OpenWeatherMap](https://openweathermap.org) and [Nominatim](https://nominatim.openstreetmap.org) APIs. 
While `Nominatim` does not require any extra steps to make API calls, `OpenWeatherMap` requires an API key, which will be automatically created after [registration](https://home.openweathermap.org/users/sign_up).

You should receive the key by email, then paste it as `OPEN_WEATHER_API_KEY` variable in `.env.development` env file. 

__NOTE__: always restart metro server with `--reset-cache` after editing `.env` files

__NOTE__: `Nominatim` can randomly block requests with `403` error; there is nothing you can do with that

__NOTE__: If `Nominatim` returns `403`, some application features may become limited, such as saving location based on the current user position

# Approach

A mix of domain and feature driven development. 

The application consists of 5 namespaces:
- `app`: assembles all the building blocks into an actual app
- `domain`: declares all the communication channels and entities of the system
- `features`: implements features of the application
- `infrastructure`: glues different parts of the system
- `ui`: declares all the ui-only related modules

## Entities

- `component`: base building block. Can use other components to compose a layout. Depends only on props.
- `widget`: a composite block of components and business logic tightened to a feature. Depends on props and external sources.
- `view`: a composite block of widget and components from different features. Contains big parts of logic spread across features. 
- `screen`: the highest building block that consists of all kind of blocks. Basically it's a specific case of `view`. The only difference is that `screen` can be used only in navigation module declaration, while `view` can be used in many screens.
- `service`: an abstraction over a 3rd party integration. Leverages dependency injection to create a wrapped instance of a specific integration.
- `store`: data storage. Both runtime and local, by leveraging async storage, zustand and persist middleware.
