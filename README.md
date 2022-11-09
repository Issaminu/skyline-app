## Status: 🚧 work-in-progress 🚧

# About the app

As part of creating a solution that solves the multitude of problems encountered by
co-owners, I conceived and created a web application that centralizes all
the actions relating to managing buildings.

A complete and innovative solution of co-ownership management which takes into
account all the functionalities essential to the activity of a syndic would be
extremely beneficial to any co-owner. It would allow easy access to information on
who, when and how much someone has contributed to the building's treasury, as
well as provide clear and detailed information on how the contributed funds are
spent. This ensures total transparency of the collection and spending of funds.

My solution, hosted on a Vercel server,
allows users to add buildings where they own or rent apartments to the application,
invite other co-owners to join the building, give some of them administrator
privileges over the building, as well as manage the collection of co-owner funds and
spend these funds on various actions related to the improvement of their common
space, such as building improvements, repairs, etc.

To learn more about the application, feel free to check out the application repport: https://bit.ly/3w4BnIq (Note: Currently, it's only available in French).

# About V2

This version will be a complete rewrite of the entire codebase using everything I learned from V1.
Main changes coming to V2:

• **Better stack:**
The olf version of the app was built using the abysmal Auth0 library, and uses
the currently-too-young NextUI library for the front-end. For V2, I'm transitioning to the use of NextAuth and TailwindUI.

• **Better security:**
V2 will have all API calls secured by the use of JWT, which is provides better security than the public APIs that V1 uses, also, inputs will be strictly validated.

• **Responsive design.**

• **Better "feel":**
This is the main reason that made me consider making V2, the current version of skyline-app feels floaty and unresponsive. a big part of that is due to relying entirely on NextUI components, which is still in beta, as well as newbie mistakes I've made (I'm looking at you, data fetching from deeply nested components.)

• **Better resilience:**
V2 will include better support for edge cases and will have (way) better input validation and sanity checks.

• **Type Safety:**
V2 will fully embrace TypeScript, meaning all types will be properly defined and enforced. Though, no strict mode or tRPC.
