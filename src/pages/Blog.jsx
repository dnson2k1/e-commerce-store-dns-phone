import React from "react";
import blog, { tags } from "../api/blog";
import BlogList from "../components/BlogList";
import Helmet from "../components/Helmet";
import RecentPosts from "../components/RecentPosts";
import { recentPosts, gallery } from "../api/blog";

const Blog = () => {
  return (
    <Helmet title="Bài viết">
      <div className="blog">
        <div className="blog__left">
          {blog.map((item, index) => (
            <BlogList key={item.id} blog={item} />
          ))}
        </div>
        <div className="blog__right">
          <div className="blog__right__item">
            <div className="blog__right__item__name blog__recent__name">
              Recent Posts
            </div>
            {recentPosts.map((item) => (
              <RecentPosts posts={item} key={item.id} />
            ))}
          </div>
          <div className="blog__right__item">
            <div className="blog__gallery">
              <div className="blog__right__item__name blog__gallery__name">
                Gallery
              </div>
              <div className="blog__gallery__img">
                {gallery.map((item, index) => (
                  <img key={index} src={item.img} alt="" />
                ))}
              </div>
            </div>
          </div>
          <div className="blog__right__item">
            <div className="blog__tags">
              <div className="blog__right__item__name blog__tags__name">
                Tags
              </div>
              <div className="blog__tags__item">
                {tags.map((item, index) => (
                  <span key={index}>{item.display}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Blog;
