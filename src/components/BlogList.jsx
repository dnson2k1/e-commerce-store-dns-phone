import React from "react";

const BlogList = (props) => {
  const { blog } = props;
  return (
    <div className="blog__list">
      <div className="blog__list__item">
        <div className="blog__list__item__img">
          <img src={blog.image.imgBlog} alt="" />
        </div>
        <div className="blog__list__item__info">
          <span className="blog__list__item__info__status">
            {blog.status === 1 ? (
              <span className="blog__list__item__info__status--news">News</span>
            ) : (
              <span className="blog__list__item__info__status--old">Old</span>
            )}
          </span>
          <h1 className="blog__list__item__info__name">{blog.name}</h1>
          <div className="blog__list__item__info__desc">{blog.desc}</div>
          <div className="blog__list__item__info__user">
            <div className="blog__list__item__info__user__info">
              <img src={blog.image.imgUser} alt="" />
              <h2>{blog.user}</h2>
            </div>
            <div className="blog__list__item__info__user__date">
              {blog.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
