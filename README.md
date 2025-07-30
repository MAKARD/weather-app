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
