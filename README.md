# Skill Keeper

## Overview

The task represents an application to create skills, people and jobs and add compile them all together.

## Workflow

As a user I want to be able to add new skills to the skill list. The skills should have a name and optionally an image (ex. javascript logo for javascript).

Once the skills are added, I as a user want to see them all listed on a separate page. The list should be sortable by name.

After skills are added, I want to create a user profile and assign some skills to it.

When the page for making user profile is open, user should be able to add name, user photo (url link to the image is enough), date of birth, location and skills. Skills are shown in form of a list and are added by clicking on them. Bonus feature is to make list filterable through input field on the top.

When new user profile is saved, it should be shown on the profiles overview page. Profiles should be sortable by name, filterable by skills and searchable by user name.

The bonus feature is to create a predictable search, activating after typing three letters.

By clicking on each profile from the list, user should see the details about it.

When on profiles or skills page, in both lists next to the each element should be a edit and delete button, which when it is clicked gives possibility to edit or delete item.

## Technical information

### PROFILES API ENDPOINT:

### GET / POST

https://6195285474c1bd00176c6be7.mockapi.io/profiles

### GET BY ID / PUT / DELETE

/profiles/:id

### SKILLS API ENDPOINT:

### GET / POST

https://6195285474c1bd00176c6be7.mockapi.io/skills

### GET BY ID / PUT / DELETE

/skills/:id

## Additional information

Try to focus on providing as many features as possible. Great design is a bonus.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Deploy App on github pages
