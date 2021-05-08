import React from 'react';
import axios from 'axios';
import MovieLists from './MovieLists';
import "./App.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    console.log("Are you ready?")

    this.state = { // 미래에 있을 수도 있는 것에 대한 것들(props)이다.
      // 즉, 쓸 것 같다고 생각되는 props들을 작성하는 것 -> 안 써도 에러는 나지 않는다!
      isLoading: true,
      movies: [] // 난 다른 key를 만들어서 거기에 추가하고 싶은데 lists같은거. 어떻게 해야 하나
    }
    // this.getMovies = this.getMovies.bind(this); // 왜 얘는 안 해줘도 될까? async 때문?
  }

  async getMovies() { // 비동기적으로 실행하지 않으면 아예 오류가 난다... 왜?
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'); // 해당 proxy에 movies라는 key가 있다.
    // 첫 data는 읽지를 못하는 것 같다... 실제로 API에 data는 한 개 뿐
    // async & await 을 안 쓰면 data를 읽지 못한다 -> 첫 번째 data: async & await과 관련이 있다?
    console.log(movies);
    this.setState( { movies, isLoading: false} ) // movies props이 새로 생긴다!
    // 즉, 이 경우의 movies는 API에서 가져온 movies key
  }

  componentDidMount() { // render()가 실행된 후 실행됨
    console.log("Rendered? Then let's do this!")
    // setTimeout(() => {
    //   this.setState({ isLoading: false }) // setState 사용 -> render()사용 -> DidUpdate()사용!
    // }, 3000);
    this.getMovies(); 
  }

  componentDidUpdate() {
    console.log("Yeah, it's been updated")
  }

  render() {
    console.log("OK, let's render!")
    const { isLoading, movies } = this.state;
    return(
      <section className="container">
        { isLoading
          ? <div className="loader">
              <span className="loader_text">Loading...</span>
          </div>
          : <div className="movies">
              {movies.map(movie => { // 이 경우 여기에 이렇게 직접 쓸 수도, 아니면 다른 함수를 만들 수도 있다.
            console.log(movie)
            return <MovieLists
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                  />
                 }
                )
              }
            </div>
        }
      </section>
    )
  }
}

export default Movie;