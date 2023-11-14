class Course {
    constructor(id, title, category,popular,mentor, duration, description, videos_count, tutorial_videos, image, mentorImage,) {
      this.id = id;
      this.title = title;
      this.category= category;
      this.popular= popular;
      this.mentor= mentor;
      this.duration = duration;
      this.description = description;
      this.videos_count = videos_count;
      this.tutorial_videos = tutorial_videos;
      this.image = image;
      this.mentorImage = mentorImage;
    }
  }
  
  export default Course;