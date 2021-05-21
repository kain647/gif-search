import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  max-width: 1040px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
export const TrendingContainer = styled.div`
  display: flex;
	width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    height: var(--size);
    width: var(--size);
    --size: 24px;
    margin-right: 10px;
    color: #02caff;
  }
`;
export const TrendingTitle = styled.h3`
  display: flex;
  color: #fff;
`;
export const TrendingContent = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
	margin-bottom: 25px;
`;
export const TrendGifsBox = styled.div`
	display: flex;
	width: 100%;
	overflow: hidden;
  img {
    display: inline-block;
    margin-left: 6px;
    height: 200px;
		
  }
`;
export const Gif = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 10px;
  background-color: #dadada;
  cursor: pointer;
  :hover {
    background-color: #b1b1b1;
  }
`;
export const SearchBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  input {
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    border: 0px;
    height: 50px;
    font-size: 18px;
    padding: 0px 60px 0px 10px;
  }
  svg {
    position: absolute;
    width: var(--size);
    height: var(--size);
    --size: 30px;
    right: 0;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    background-image: linear-gradient(
      45deg,
      rgb(153, 51, 255) 0%,
      rgb(255, 102, 102) 50%,
      rgb(153, 51, 255) 100%
    );
    background-size: 400%;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
`;
