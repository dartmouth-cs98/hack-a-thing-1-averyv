## Hack-a-thing-1 




#### What I did:
I built a simple iOS application.  In CS 52 this past spring, I learned React; however, I was not able to figure out the React Native extra credit assignment.  As CS 98 projects often involve iOS apps, I wanted to get some practice with the platform beforehand (also because I thought it would be super cool to learn).  I followed a course on http://lynda.dartmouth.edu/ called React Native Essential Training (<https://www.linkedin.com/learning/react-native-essential-training/welcome?u=2167153>).  I followed the initial set-up steps and basic walkthrough (*Introduction,* *Getting Started*, and *React Native Fundamentals*).  I skipped over the *Building a Simple Game App* section, and decided instead to follow the *Building a Data-driven App* section and the *Animation and Gesture Control* section that followed.  

My finished product is a simple iOS app that performs multiple ajax calls to an API hosted at <https://bakesaleforgood.com>, which is a site where users can buy and sell products or services that support a specific cause.  The home page of my app allows you to scroll through the different deals and see the cover image, the title, the cause, and the price.  The search bar at the top allows you to filter the deals by title.

<p align="center">
	<img src="./homePage.gif" width="200" height="400" />
</p>


When you click on a specific deal, you are taken to a new page that shows you who posted the deal and a description of the deal.  You can scroll through the different photos.  If you are not interested, you can click "Back" in the top left corner to return to the home page.  If you are interested, you can click "Buy this deal!" and be taken to the corresponding site on <https://bakesaleforgood.com>.

<p align="center">
	<img src="./dealPage.gif" width="200" height="400" />
</p>

#### What I learned:

I feel as though I learned a lot from this course.  First, I re-familiarized myself with VSCode and the React basics (prop, state, etc.).  Second, I learned the most important aspects of React Native.  I learned how to style React Native components by `const styles = StyleSheet.create()` to the bottom of the component page and labeling elements with names that correspond to defined style elements (e.g., `style={styles.image}`).  This differs from React where the standard practice is create a separate style sheet, in which an element is indicated by its id or class.  I also learned how to use the Fetch API to collect data and display it on one page, as well as how to later fetch more API data for a different view.  I learned how to implement a back link to return from the deal info to the home page and how to implement a search box.  In the fifth section, I learned how to use Animation and the PanResponder API to create smooth animations that run conditionally and respond to user touch.  Finally, I learned how to integrate a button that allows users to open URLs directly from the app into their default web browser.


#### What didn't work:

One way that my application differed from that in the tutorial was my decision to use `expo-cli` rather than `react-native-cli`, as `expo-cli` was used in the CS52 React Native extra credit assignment.  I faced a few challenges with Expo.  First, I was unable to open the application in the Simulator for a while; even after I updated my XCode, I kept getting an error that told me to update the Simulator.  I decided to open the Simulator on my phone using the iOS Expo app, but also had some difficulty getting it to work on that platform.  Eventually, I was able to get the Expo app to work so that I could scan the corresponding QR code from my localhost and see the application with hot reloading enabled.

Another aspect that was challenging was the amount of time that the process took.  Specifically, the set-up took a while.  I had to upgrade some applications and dependencies, many of which I had not used in about six months.  The above process of figuring out Expo also took a long time.

Finally, I built my app with only iOS in mind.  While the course I followed included some information about Android, the lessons were based off of the base files provided with `react-native-cli`.  I could not figure out how to integrate Android with `expo-cli`.


