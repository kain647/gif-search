import React from "react";
import Slider from "react-slick";
import Masonry from "react-responsive-masonry";
import { GoSearch } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { BiTrendingUp } from "react-icons/bi";
import {
  Container,
  LogoContainer,
  SearchContainer,
  TrendingContainer,
  TrendingHeader,
  TrendingTitle,
  TrendingContent,
  SearchBox,
  Content,
  TrendGifsBox,
} from "./styled";

class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchGiphy: "",
      gifs: [],
      gifsContent: [],
      trending: [],
      random: [],
    };
    this.getTrending();
  }

  getGiphy = async () => {
    const searchGiphy = this.state.searchGiphy;
    const API_KEY = `67gUppgnCJILpG2Nh4Xb1N70Xf6uXthJ&q`;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${searchGiphy}&limit=25&offset=0&rating=g&lang=en`
    ).then((response) => response.json());
    //console.log(response);
    this.setState({
      gifs: response.data,
    });
  };

  getTrending = async () => {
    const API_KEY = `67gUppgnCJILpG2Nh4Xb1N70Xf6uXthJ&q`;
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=100`
    ).then((response) => response.json());
    this.setState({
      trending: response.data,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.getGiphy();
    }
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchGiphy: value,
    });
  };

  render() {
    const settingsSlider = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: "5",
      slidesToScroll: 4,
    };
    const { searchGiphy, gifs, trending, random } = this.state;
    return (
      <Container>
        <LogoContainer>
          <img src={`/images/giphyLogo.png`} />
        </LogoContainer>
        <SearchContainer>
          <SearchBox>
            <GoSearch />
            <input
              placeholder={"Search GIPHY"}
              value={searchGiphy}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
            />
            {searchGiphy !== "" && (
              <VscChromeClose
                onClick={() => this.setState({ searchGiphy: "", gifs: [] })}
              />
            )}
          </SearchBox>
        </SearchContainer>
        <TrendingContainer>
          <TrendingHeader>
            <BiTrendingUp />
            <TrendingTitle>Trending</TrendingTitle>
          </TrendingHeader>
          <TrendingContent>
            <Slider {...settingsSlider}>
              {trending.map((item) => {
                //console.log(item);
                return (
                  <TrendGifsBox>
                    <img src={item.images.preview_gif.url} />
                  </TrendGifsBox>
                );
              })}
            </Slider>
          </TrendingContent>
        </TrendingContainer>
        <Content>
          <Masonry columnsCount={3} gutter="10px">
            {gifs.map((item) => {
              //console.log(item);
              return <img src={item.images.preview_gif?.url} />;
            })}
          </Masonry>
        </Content>
      </Container>
    );
  }
}

export default Giphy;
