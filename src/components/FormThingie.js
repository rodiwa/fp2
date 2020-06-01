import React from 'react'

// test data
const database = {
  section1: {
    fields: [
      {
        type: 'title',
        value: 'Front End & JavaScript Developer'
      },
      {
        type: 'text',
        value: `I'm a Javascript developer from Mumbai. I specialise in excellent UI/UX solutions that help clients translate their ideas into product-ready apps.`
      }
    ]
  },
  section2: {
    fields: [
      {
        type: 'title',
        value: 'Major Skillset'
      },
      {
        type: 'text',
        value: 'React. Redux. Vue. VueX. Jest. AngularJS. PWA. Web Storage. Service Workers. Promise. Fetch. Async Await.'
      },
      {
        type: 'title',
        value: 'React Native. Expo. Material UI. Firebase Database, Hosting. NodeJS. Google Cloud Computing. Docker. Kubernetes. Python.'
      },
      {
        type: 'text',
        value: 'On The Sides'
      }
    ],
    section3: {
      fields: [
        {
          type: 'title',
          value: 'Tech At A Glance'
        },
        {
          type: 'widget',
          widgetType: 'word-cloud',
          widgetButton: {
            show: false
          },
          widgetData: [
            { "title": "Docker", "size": "3" },
            { "title": "Github", "size": "1" },
            { "title": "Google Cloud Functions", "size": "2" },
            { "title": "Heroku", "size": "3" },
            { "title": "VueX", "size": "4" },
            { "title": "Travis CI/CD", "size": "2" },
            { "title": "Vue", "size": "4" },
            { "title": "VS Code", "size": "1" },
            { "title": "GCP", "size": "2" },
            { "title": "React", "size": "5" },
            { "title": "React Native ", "size": "3" },
            { "title": "IndexedDB", "size": "2" },
            { "title": "FB RealtimeDB", "size": "2" },
            { "title": "Service Workers", "size": "4" },
            { "title": "Jest Enzyme", "size": "1" },
            { "title": "Jenkins CI/CD", "size": "3" },
            { "title": "Kubernetes", "size": "2" },
            { "title": "FB Hosting", "size": "2" },
            { "title": "Heroku", "size": "3" },
            { "title": "NodeJS", "size": "4" },
            { "title": "Material UI", "size": "4" },
            { "title": "Web Storage", "size": "3" },
            { "title": "PWA", "size": "2" },
            { "title": "Redux", "size": "5" },
            { "title": "Expo", "size": "2" }
          ]
        },
        {
          type: 'widget',
          widgetType: 'timeline',
          widgetButton: {
            show: true,
            title: 'Show Timeline'
          },
          widgetData: [] // take from timeline data 
        }
      ]
    },
    section4: {
      fields: [
        {
          type: 'title',
          value: 'About Me'
        },
        {
          type: 'text',
          value: `I have spent a major part of my career behind the UI of some amazing products across various verticals. A part of me is always learning something new that keeps me motivated to adopt latest trends and paradigms of software development.`
        },
        {
          type: 'widget',
          widgetType: 'cards',
          widgetButton: {
            show: false
          },
          widgetData: [
            {
              img: '',
              title: 'Simple. Clean. Readable code',
              text: 'One of the most difficul parts of coding is to keep things simple'
            },
            {
              img: '',
              title: 'Best Practices & Rapid Development',
              text: 'Keeping up the pace with productivity tools, useful extensions and best practices'
            },
            {
              img: '',
              title: 'Love Of Learning',
              text: 'From web dev to servers & API, from containers & CI/CD to Kotlin & PWAs'
            },
            {
              img: '',
              title: 'Embracing Modern Paradigms',
              text: 'To find quicker (or lazier) ways to get things done - ES6, TypeScript, Microservices, Docker, Cloud'
            }
          ]
        }
      ]
    },
    section5: {
      fields: [
        {
          type: 'title',
          value: 'Work & Projects'
        },
        {
          type: 'text',
          value: `Showcase of various projects and collaborations, some done prefessionally, some personal projects.`
        },
        {
          type: 'widget',
          widgetType: 'showcase',
          widgetData: [] // fill from original
        }
      ]
    }, // end
  }
}

export default class FormThingie extends React.Component {
  render() {
    console.log('rohit')
    const { database } = this.props
    console.log(database)
    return (
      <div>
        hello
      </div>
    )
  }
}
