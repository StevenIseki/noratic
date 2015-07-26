/* just markdown to html our content */

import Markdown from "utils/markdown";
import Tagger from "utils/tagger";
import TagLink from "components/tag_link";

export default class PostContent extends React.Component {
  componentDidMount() {
    this.highlightCode();
    this.rewrapImages();
    this.rewrapVideos();
  }

  componentDidUpdate() {
    this.highlightCode();
    this.rewrapImages();
    this.rewrapVideos();
  }

  render() {
    var text = this.linkifyTags(this.props.body);
    var html = Markdown.format(text);

    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
  
  /*
  linkifyTags(text) {
    return Tagger.replace(text, function(tag, name) {
      return React.renderToString(<TagLink text={tag} name={name} />);
    });
  }

  highlightCode() {
    this.forEvery("pre code", function(code) {
      hljs.highlightBlock(code);
    });
  }

  rewrapImages() {
    this.forEvery("p a:only-child img:only-child, p img:only-child", function(img) {
      var caption   = img.getAttribute("alt");
      var figure    = document.createElement("figure");
      var paragraph = img.parentNode;
      var link;

      if (paragraph.tagName === "A") {
        link = paragraph;
        paragraph = link.parentNode;
        link.setAttribute("target", "_blank");
      }

      paragraph.replaceChild(figure, link || img);
      figure.appendChild(link || img);

      if (caption) {
        var figcaption = document.createElement("figcaption");
        figcaption.innerHTML = caption;
        figure.appendChild(figcaption);
      }
    });
  }

  rewrapVideos() {
    this.forEvery("iframe", function(frame) {
      var paragraph = frame.parentNode;

      if (paragraph.className !== "video") {
        var video = document.createElement("div");
        video.className = "video";
        paragraph.replaceChild(video, frame);
        video.appendChild(frame);
      }
    });
  }

  forEvery(css_rule, callback) {
    var domNode = React.findDOMNode(this);
    var nodes = domNode.querySelectorAll(css_rule);

    for (var i=0; i < nodes.length; i++) {
      callback(nodes[i]);
    }
  }
  */


}