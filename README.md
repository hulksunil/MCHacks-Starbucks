## Inspiration
Our inspiration comes from a true story. One of us was recently stuck in a convenience store during a robbery.  While thankfully no one was hurt, it took a huge amount of time for the shopkeeper to report the crime to the police and the robbers escaped. 

Several studies have established that if the police take less than 5 minutes to respond to a call involving crime, the probability of making an arrest is **60 percent**. When the time exceeds 5 minutes, the arrest probability drops to approximately **20 percent**.
Research has also shown that the median delay for citizen reporting is 10 minutes and that almost three-quarters of crimes-related calls are delayed beyond the 5-minute figure.

Our goal is to find a way to reduce the response time for reporting crimes.

## What it does
**1. Enter Location**: The product owner enters their current location through Google Maps.

**2. Nearest Police Stations:** Our product detects the top 5 nearest police stations and stores their contact numbers.

**3. AI Model Detects Weapon**: In the case of a crime, the object detection model will detect a gun and take a screenshot of the scene with the location.

**4. Police Is Informed**: An MMS containing the location and image of the crime scene is sent instantly to the nearest police station.

## How we built it
We used **React.js** to build the landing page and the front end of the application. **Google Maps API**was used to render the map along with the current location of the user. We used Google Maps nearby feature to find the top 5 closest police stations and get their contact information. 

For the gun detection model, we trained a **YOLO V5 Object Detection** model with pre-annotated images of different guns. We ran Python scripts to preprocess the information and fine-tune the model, achieving an accuracy of around **84%**. 

The backend is built in Python Flask and uses **Twilio API** to send multimedia messages including the screenshot of the detected scene to the nearest police station.

## Challenges we ran into
This was our first time working with computer vision and training a YOLO V5 model with annotated images. It was daunting at first, but we made it work by reading the documentation and it worked out pretty well in the end!

## Accomplishments that we're proud of
We are happy to turn our idea into a tangible application and it's something that might be useful to a lot of businesses, and stores, and potentially reduce crimes and save lives!

## What we learned
We learn that when your product has the potential to make a positive impact on society you don't get tired and everyone on your team works twice as hard. When the people you work with believe in the product's vision and mission, they stay awake for 24+ hours (shoutout to Red Bulls)!

## What's next for VigiLENS
We have thought of a lot more ideas for VigiLENS such as: 
- custom hand signal to call the police
- detecting a wider variety of weapons
- building a better, more scalable computer vision model with more accuracy
- video-to-text transformation to describe suspects and the scene to the police
- detecting other forms of crimes, such as stealing objects, etc. 
