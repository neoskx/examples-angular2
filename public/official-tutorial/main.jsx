'use strict';

let data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

let CommentBox = React.createClass({
    render(){
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.props.data}></CommentList>
                <CommentForm></CommentForm>
            </div>
        );
    }
});

let CommentList = React.createClass({
    getComments(){
        let comments = this.props.data.map((item,index)=>{
            return <Comment key={index} author={item.author}>{item.text}</Comment>
        })

        return comments;
    },
    render(){
        return (
            <div className="commentList">
                {
                    this.getComments()
                }
            </div>
        )
    }
});

let CommentForm = React.createClass({
    render(){
        return (
            <div className="commentForm">
                Hello world! I am a CommentForm.
            </div>
        )
    }
});

let Comment = React.createClass({
    rawMarkup(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup }
    },
    render(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <p dangerouslySetInnerHTML={this.rawMarkup()}></p>
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox data={data}></CommentBox>,
    document.getElementById("content")
);