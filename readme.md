[Geekwise Address Book](https://github.com/geekwise/addressbook) — Web Based `ios` App
==================================================

Table of Contents
--------------------------------------
### Last Updated @ 05-10-2016


1. To Do List
2. APP Features   
3. Design Layout Technical Notes
4. Function Technical Notes
5. Outside Frameworks
6. General Technical Notes and New Ideas
7. Device Testing
8. Team Information


To Do
--------------------------------------
### Last Updated @ 05-06-2016


1. [ ] [Create CRUD]
    [ ] - add `Contact`
    [ ] - add `Groups`
	 [ ]   - WebAPI Camera for CRUD
2.[ ] [CRUD]
   [ ] - search for `contacts`
   [ ] - search for `phone number`
    [ ]- search for `email`    
3. [ ] [Update CRUD]
   [ ] - edit `contacts`
    [ ]- edit `photos
    [ ]- edit `groups
4. [ ] [Refactoring]
    [ ]- refactor current javascript using functions
5. [ ] [README]
    [ ]- **MAINTAIN TO DO LIST**
    [ ]- add links to table of content
6. [ ] [Add Scroll]
    [x]- sticky header for each letter navigation **A-Z**
    [x]- each `navigation` header slides under previous header when scroll reaches top
    [ ]- `contact name` slides under header
7. [ ]- media querry
    [x]-combine contact to front page during landscape
    [ ]-font size front page
    [ ]-font size contact page
    [ ]-nav bar realligned

APP Features
--------------------------------------

- App displays the current time on the top of the device
- By using the `+`button on the top right will take the user to a secondary layout allowing the addition of a new `contact`
- The input screen will allow the user to search for an individual contact by first name, phone number, or email address.
- A letter `navigation bar` will be set to the right of the `contact list` set to touch or click, that will send users 
  to the corrosponding letter in the `contact list`
- By touching or clicking on individual `contacts` the user will be taken to a secondary layout allowing the `edit` feature
- User can use the camera on the device for adding an `contact image`, or upload an existing image from your devise

 
## Non Goals
```
User can catagorize and search `contacts` using the `group` button
  battery level will display by tracking your battery level if devise battery is present
 User can `share` `contact` with others through messaging or `social media`
 User can `textmessage` from `contact`
 **Font size may be set using Facebook to determine age**
```


Design Layout Spec
--------------------------------------

- Create a container that will display the `current time` on the top of the original layout 
- Create a `+` button that will send the user to a secondary layout `new contact`
- Create a navigation using the alphabet that will maintain an absoulute position
    -  By click`touch` letter will send users to related letter in `contact list`
- Create click`touch` function that will allow interaction by user for individual `contact` to display on a secondary layout `saved contact`
    - On `saved contact` layout display functions allowing user to update the `saved contact`
        - Create an `cancel` button that will allow the user to back out of the secondary menue and return to the original layout
        - Create an `done` button that saves information and returns user to original layout
        - Create an `all contacts` button that will return users to original layout
        - Create an`edit` button that allows users to update `saved contact`
-On `new contact` layout 
    - Create an `cancel` button that will allow the user to back out of the secondary menu and return to the original layout
    - Create an `done` button that will save the new information to `saved contact` **and** 
      add `contact` to `contact list`
    - Create a container for `add image` that will allow user to use device camera, or `upload` saved image to `contact` 
    - Create `input` for first name
    - Create `input` for last name
    - Create `input` for company
    - Create click`touch` with `input` for `phone numbers`
        - Create function that will create a second `input` for `phone number` **and**
          Create `dropdown` to select type of `phone number` 
    -Create click`touch` with `input` for `email`
        - Create function that will create a second `input` for `email` **and**
          Create `dropdown` to select type of `email` 


Non Goal layout specs
----------------------------

- Create button for `group` for secondary layout
    - The click `touch` function displays the secondary layout for adding a new `Group` **and** 
      displays current `Groups`
    - Create interaction for individual `Group` to secondary layout to display contacts within `Group`
        -Create interaction for individual `contacts`  and send user to individual contact layout
    - `Done` saves `Groups` and sends user to original layout
-On the `saved contact` layout
    - Create a `share` button that allows user to share contact information
-On the `new contact` layout
    - Create `dropdown` to select `ringtone` for `content` **or**
      use default `ringtone`
    - Create `dropdown` to select `texttone` for `content` **or** 
      use default `texttone`
    - Create `dropdown` to select `vibration`
    - Create functions that will create an `input` for
    ```
     `URL` 
     `address`     
     `birthday`
     `date`
     `related name`
     ```
    - Create function that will create an `input` for `social profile` **and**
      Create a second `input` for `social profile`
    - Create function that will allow user to `instant messeage` selected `contact`
    - Create `fieldbox` with `placeholer` **NOTES** for user notes
    - Create function to add `fieldbox` for users custome needs
   



Function Technical Notes
----------------------------





Outside Frameworks
-----------------

General Technical Notes and New Ideas
-----------------
Font Size based on age
```
User can log into Facebook or other social media. The device will detect the age of the user.
The age will then be divided by 2. The sum will determine the font-size for the app making the design
easier on the eyes during use, otherwise font-size is preset.

**example**  
user = age 50     font-size = 25px
user = age 30     font-size = 15px
```

break points needing media querry
```
320px-360px portrait for most smart phones occasionally 390px
412px-432px portrait for apple iphone6,motorola nexus6,microsoft lumia 1520
361-480px  landscape for most smart phones
***Blackberry needs specifics for unusual screen sizes***


```




Device Testing
------------------------------

Team Information
----------
[geekwise](https://github.com/geekwise)

[Kao Thao](https://github.com/geekwise-kao-thao)

[J Tablett](https://github.com/geekwise-jennifer-tablett)


If you have any questions, please feel free to ask 
