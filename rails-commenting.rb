# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A type of class that responsible for making sense out of a request made in an API. Also known as the middle man between the views and model. 
class BlogPostsController < ApplicationController
  def index
    # ---2) Instance variable that stores all the data of the BlogPost. 
    @posts = BlogPost.all
  end

  # ---3) A controller method created to show information about one blog at a time (due to params being setup/required). 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Another controller method used for when its time to make a new blog. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Another instance variable defining the create method that when one wishes to create a new blog they can do so and will get redirected to a new page to fill out their blog post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) An instance variable defining the edit method that will let the user edit a particular blog post depending upon the parameter given to specify which blog they wish to edit. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) When a user would like to update a blog post they will be redirected to specific page to do so and can submit changes on that page. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) User will be redirected to blog home page after blog is deleted. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Makes sure this method can't be called upon from outside this object
  private
  def blog_post_params
    # ---10) This ensure that the given parameters are present otherwise an error will be thrown as an output. 
    params.require(:blog_post).permit(:title, :content)
  end
end
