import PageStore from ???;
import PostContent from "./content";
import TagsList from "./tags";
import NotFound from "./404";

export default class PageView extends React.Component {

  componentWillMount() {
    var page = PageStore.current();

    if (this.props.hasOwnProperty("page")) {
      page = this.props.page;
    }

    if (page) {
      page.load();
    }

    this.setState({page: page});
  }

  render() {
    var page = this.state.page;

    if (page) {
      return (
        <article className="page">
          <PostDate date={page.createdAt}/>
          <PostContent body={page.body||page.extract} />

          {!page.body}

          <a href="/">&lt;- Other posts</a>
          <TagsList tags={page.tags} />
        </article>
      );
    } else {
      return <NotFound />;
    }
  }

  _pageLoaded() {
    this.setState({loaded: true});
  }
}