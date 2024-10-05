var modalInfo = {
    4: {
        title: "Med Store  ",
        members: "Team Id :1017 Members:1",
        info: "A platform for patients and Doctors to ease down the process of remote diagnosis",
        link:"https://drive.google.com/file/d/1EggvhtmuMV13oN318C40l7lK18kbEB4i/view?usp=sharing"
      },
    5: {
      title: "University Companion System",
      members: "Team Id :1017 Members:1",
      info: "A Unique platform to make University & Online learning much more efficient with AI as a helping tool, which includes , a system for University use where in attendance is captured using facial recognition , ​Instructor's voice is recorded in .wav file and large audio files are converted to smaller chunks which are then converted to text and further the text is summarised by AI model/ training and students can have daily access to the summarised text as well as the recorded audio on an app as well as see their attendance status daily,  the App additionally has  Assignment Submission as well as online hostel punch in option along with a platform for students and teachers to plan and manage their day to day schedule",
      link:"https://drive.google.com/file/d/1qWzstTIIT8qLBL_zM9STmcZ01ahLnfEY/view?usp=sharing"
    },
    6: {
      title: "VeCDeRS ",
      members: "Team Id:4807 Members: 2",
      info: "The Project Vehicle Crash Detection and Reporting System(VeCDeRS) primarily focus is to help save the lives of accident victims the device detects a possible vehicle crash and reports it to the near and dear ones of the owner and also to the authorities the device sends relevant data like the location at the time of the crash to facilitate rescue and aid to the affected parties.",
      link:"https://github.com/NEType24443/Vehicle-Crash-Detection-System/blob/main/README.md"
    },
    2: {
      title: "Sentiment Analysis",
      members: "Team Id : 5616 Members:1",
      info: "Sentiment analysis website is a NLP based project used to interpret and classify the sentiments of people based on the text collected and produce results in interactive graphical form.  This can be used in understanding reviews on product areas or psychological effects of any event on the community/ group.",
      link:"#"
    },
    1: {
      title: "Mask Detection Crowd Control",
      members: "Team Id : 5306 Members:2",
      info: "It’s a convolutional neural networks and open cv based project which detects mask and regulates the crowd according to it.",
      link:"#"
    },
    7: {
      title: "Non Touch Biometric",
      members: "Team Id : 7435 Members:1",
      info: "Nobot is an alternative system designed to replace  the current biometric system prevalent in manipal hostels.This Flutter based app allows students to log their attendance in their own space without contacting any other people.",
      link:"#"
    },
    8: {
      title: "Robo Sphere",
      members: "Team Id : 4920 Members:2",
      info: "Robo-Sphere is a 2 pendulum driven omnidirectional spherical robot finding it's use in space explorations, military and surveillance.",
      link:"#"
    },
    9: {
      title: "Smart Robotic Manipulator",
      members: "Team Id : 4832 Members:2",
      info: "A robotic manipulator which can detect objects with the help of computer vision and then pick - place them accordingly",
      link:"#"
    },
    10: {
      title: "SLAM-Nav",
      members: "Team Id : 1866 Members:1",
      info: "SLAM-Nav is a vision-enabled robot that can traverse through an unknown environment, localize itself and simultaneously build a map of the environment it is in. Such robots can be paired with multiple other devices to be used in cave explorations, search and rescue, navigating-assistant for the blind, and in the hotel industry",
      link:"#"
    },
    11: {
      title: "Navigators",
      members: "Team Id : 5522 Members:1",
      info: "An autonomous differential drive robot which uses simultaneous localisation and mapping to navigate its path to the desired location using Robot Operating System and laser sensor.",
      link:"#"
    },
    12: {
      title: "Bhramit",
      members: "Team Id :6031 Members:1",
      info: "BHRAMIT SMARTPHONE PROJECTOR",
      link:"#"
    },
    13: {
      title: "Team Dhruv",
      members: "Team Id :7826 Members:3",
      info: "hour board",
      link:"#"
    },
    14: {
      title: "up to the minute",
      members: "Team Id :1001 Members:3",
      info: "A platform providing innovative solutions for differently-abled people to help them communicate better in this “new normal”",
      link:"#"
    },
    15: {
      title: "BEINNOVATIVE",
      members: "Team Id :3610 Members:1",
      info: "smart braille",
      link:"#"
    },
    16: {
      title: "Robo Race",
      members: "Team Id :2716 Members:3",
      info: "",
      link:"#"
    },
    17: {
      title: "A L",
      members: "Team Id :5454 Members:1",
      info: "",
      link:"#"
    },
    18: {
      title: "Dhruv Robotics",
      members: "Team Id :6135 Members:2",
      info: "",
      link:"#"
    },
    20211:{
      title: "Automated Luggage Handling System (ALS)",
      members: "Rishabh Dugar",
      info: "This is a proposed system for airports which aim to reduce the time taken to get the luggage back at arrival to less than a quarter of the time taken presently. This system is autonomous and works like a warehouse, with automated self pickup points. This also reduces the issue of the luggage being misplaced or to have gone missing.",
      link: "#",
    },
    20212:{
      title: "ACE Drone",
      members: "Ratnesh, Yash Raj, Abhishek",
      info: "ACE is a vision-enabled remote-controlled quadrotor capable of traversing in any environment. Data obtained through LiDAR sensing after millions of computations is used to create a real-time 3D map of any terrain. The simultaneous Localization and Mapping (SLAM) technique used ensures accurate mapping of any closed surroundings. The drone can map any unexplored territory and record the events with the camera mounted on it.",
      link: "#",
    },
    20213:{
      title: "Micro-disinfecting Bot",
      members: "Sairaj, Hrithik",
      info: "Micro-disinfecting Bot is semi-autonomous robot that will spray repellents or pesticides or disinfectants in the easily inaccessible areas of a room or a 4-walled structure. It uses LiDAR sensor to map the room, identify the area to be disinfected and uses a magnetometer to get directions to move towards that area. This robot has a metallic alloy body and uses a cylindrical wheel in the front, 4 spherical wheels and 1 rotating disc wheel to move from one place to another. This bot is capable of storing maps and using them for future reference by actively using the Bluetooth Module.",
      link: "#",
    }
  };

  // Get the modal
  var modal = document.getElementById('preview');

  // button that opens the modal
  var btn = document.getElementsByClassName("vbutton");

  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // open modal
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };

  function openModal(project){
    var id = project.id;
    fillOut(id);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }

  function fillOut(id){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("members").innerHTML = modalInfo[id].members;
    // document.getElementById("link").href =modalInfo[id].link;
  }

  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
