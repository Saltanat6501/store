import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Сән",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Электроникалар",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Көліктер",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Үй және бақша",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Сыйлықтар",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Музыка",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Денсаулық және сұлулық",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Үй жануарлары",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Балалар ойыншығы",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Азық түлік",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Кітаптар",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
