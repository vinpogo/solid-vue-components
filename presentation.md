---
author: Vincent Grossmayer
theme: ./theme.json
---

```
   _____  ____   _        _____   _____                     
  / ____|/ __ \ | |      |_   _| |  __ \                    
 | (___ | |  | || |        | |   | |  | | __   ___   _  ___ 
  \___ \| |  | || |        | |   | |  | | \ \ / | | | |/ _ \
  ____) | |__| _| |____ _ _| |_ _| |__| |  \ V /| |_| |  __/
 |_____(_\____(_|______(_|_____(_|_____/    \_/  \__,_|\___|
```

---

# About myself

- Team lead of Frontend development at Tset
- Passionate about typescript
- Vue enthusiast

---

# S.O.L.I.D principles

An acronym for five design principles intended to make object-oriented designs more understandable, flexible and maintainable.

## Single responsibility
There should never be more than one reason for a class to change

## Open-closed

Software entities should be open for extension, but closed for modification

## Liskov substitution

Refernces to base classes must be able to use objects of derived classes

## Interface segregation

Clients should not be forced to depend upon interfaces that they do not use

## Dependency inversion

Depend upon abstraction, not concretions

---
# Summary

## Single responsibility

- extract stateful logic into composables
- extract styling needs into components
- extract user interactions into components
- extract business logic into components

## Open-closed

- dynamize implementation
- higher-order functions
- leverage props

## Liskov substitution

- generics in function (soon also available for components)
- fallthrough attributes for vue components

## Interface segregation

- prop only what is needed for a component
- create the right interfaces for functions

## Dependency inversion

- leverage emits and implement logic in parent components
- dependency injection

---

```
                                              _   _                ___  
     /\                                      | | (_)              |__ \ 
    /  \   _ __  _   _    __ _ _   _  ___ ___| |_ _  ___  _ __  ___  ) |
   / /\ \ | '_ \| | | |  / _` | | | |/ _ / __| __| |/ _ \| '_ \/ __|/ / 
  / ____ \| | | | |_| | | (_| | |_| |  __\__ | |_| | (_) | | | \__ |_|  
 /_/    \_|_| |_|\__, |  \__, |\__,_|\___|___/\__|_|\___/|_| |_|___(_)  
                  __/ |     | |                                         
                 |___/      |_|                                         
   ▄▄▄▄▄▄▄  ▄▄▄  ▄ ▄▄    ▄▄▄▄▄▄▄  
   █ ▄▄▄ █  ▄▄█▀ █▄█ █▄▄ █ ▄▄▄ █  
   █ ███ █ █ █▀▄▀  ██▄██ █ ███ █  
   █▄▄▄▄▄█ ▄▀█ ▄▀▄ █▀▄ █ █▄▄▄▄▄█  
   ▄▄   ▄▄▄ █▄ █▄█▄█▄ ▄    ▄▄     
   ▀█▀██▀▄ █▄▀▄▄███ ▄▀▀ ▀ ▀█ ▀▀   
   █▀▀ ▀ ▄▄▀▄█▀▄ ▀█▀  █▀▀▄▄ ▀  ▄  
   ▄ ▀▀ █▄▀ ▄█ ▀▀▄███▀▀█▄▀▀█▄▄▀▀  
   █▀ ▀▀▄▄▄█▄▄▀▀▄▄  ▄▄█ ▄ █▀▄█ ▀  
   █▄ ▄▄ ▄▀ ▄▀█▄▄██▄▀▀█  ▀▀█▄▀▀█  
   █  ▀▀▀▄██▀█  ▄▄▄▀▄ ▄█▄█▄▄ ▄▄▄  
   ▄▄▄▄▄▄▄ ██▄▀▄███▄▄▄▄█ ▄ ██▄    
   █ ▄▄▄ █ ▀▄▄▀▄ ▀ ▄  ██▄▄▄█▄ ▀▀  
   █ ███ █  ▄█▀ █▄█▀█▀███▄▄▄██▄▀  
   █▄▄▄▄▄█ █ █ ▄▄█  ▄ ▄  ██▄▀█ ▀  
```