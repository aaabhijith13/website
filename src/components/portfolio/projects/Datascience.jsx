import React from 'react'
import IMG1 from "./../../../assets/portfolio1.jpg"
import IMG2 from "./../../../assets/portfolio2.jpg"
import IMG3 from "./../../../assets/portfolio3.jpg"
import IMG4 from "./../../../assets/portfolio4.jpg"
import IMG5 from "./../../../assets/portfolio5.png"
import IMG6 from "./../../../assets/portfolio6.jpg"
import "./datascience.css"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cardio Good Fitness Project",
    description: "Do Preliminary Data Analysis using python, perform univratiate and multivariate analysis, perform Exploratory data analysis for variables applicable. Skills used: Pandas, Seaborn, Matplotlib, numpy",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/Project%201.pdf"
  },
  {
    id: 2,
    image: IMG2,
    title: "Axis Insurance Project",
    description: "Explore the dataset and extract insights using Exploratory Data Analysis. Perform A/B testing. Skills used: Null/Alternative hypothesis testing, independent t-test, Chi-Squared test, Shaprio Wilks Test and One-Way ANOVA F-test",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/Project%202.pdf"
  },
  {
    id: 3,
    image: IMG3,
    title: "Cars4U Project",
    description: "Come up with a pricing model that can effectively predict the price of used cars and can help the business in devising profitable strategies using differential pricing.",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/cars4u.html"
  },
  {
    id: 4,
    image: IMG4,
    title: "All life Bank US Customer Prediction",
    description: "To build a model that will help the marketing department to identify the potential customers who have a higher probability of purchasing the loan.To predict whether a liability customer will buy a personal loan or not. Which variables are most significant. Which segment of customers should be targeted more.",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/Project%204.pdf"
  },{
    id: 5,
    image: IMG5,
    title: "Travel Package Purchase Prediction",
    description: "To analyze the customers' data and information to provide recommendations to the Policy Maker and Marketing Team and also build a model. Objective is to predict the potential customer who is going to purchase the newly introduced travel package.",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/Project%205.pdf"
  },
  {
    id: 6,
    image: IMG6,
    title: "Credit Card Users Churn Prediction ",
    description: "Come up with a classification model that will help the bank improve its services so that customers do not renounce their credit cards Identify the best possible model that will give the required performance. Objectives are to, Explore and visualize the dataset ,Build a classification model to predict if the customer is going to churn or not",
    github: "https://github.com/aaabhijith13/Data_Science/blob/main/Other_Projects/Project%206.pdf"
  }
]

export const Datascience = () => {
  return (
    <div className='container portfolio__containter'>
      {
        data.map(({id, image, title, description, github}) => {
          return (
              <article key = {id}className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src = {image} alt=""/>
                </div>
                  <h3>{title}</h3>
                  <div className="description__container">
                  <h5>{description}</h5> 
                  </div>
                  <div className='github__container'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                </div>
            </article>
          )
        })
      }
    

  </div>
  )
}
