// import jsdom from 'jsdom'
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"


import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import React from 'react'
import Comment from '../src/components/Comment.jsx'
import CommentAvatar from '../src/components/CommentAvatar.jsx';
import CommentContent from '../src/components/CommentContent.jsx'
import CommentMeta from '../src/components/CommentMeta.jsx'
import Reply from '../src/components/Reply.jsx'
import BigUserTooltip from '../src/components/BigUserTooltip.jsx'
import SimpleTooltip from '../src/components/SimpleTooltip.jsx'
import { expression } from '@babel/template';



const testUrl = 'http://localhost:3002/AmigoKing/Little%20Bugs/'
const testUser = 'AmigoKing'
const testSong = 'Little Bugs'
const testAvatar = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
const commentTestProps = {
  comment: {
    text: 'test comment',
    songTime: '01:01',
    commentDate: 'some date',
    userName: testUser,
    userPhoto: testAvatar,
    userFollowers: 100
  }
}
const testStyle = { 
  top: 0,
  left: 0
}

describe('<Comment />', () => {
  it('renders without crashing ', () => {
    const wrapper = shallow(<Comment />);
  })

  it('should have correct initial state', () => {
    const wrapper = shallow(<Comment />)
    expect(wrapper.state('showReply')).to.be.false
    expect(wrapper.state('showReplyHover')).to.be.false
  })

  it('should render CommentAvatar CommentContent and CommentMeta components ', () => {
    const wrapper = shallow(<Comment />)
    expect(wrapper.find(CommentAvatar).exists()).to.be.true
    expect(wrapper.find(CommentContent).exists()).to.be.true
    expect(wrapper.find(CommentMeta).exists()).to.be.true
  })

  if('should not render reply initially ', () => {
    const wrapper = shallow(< Comment />)
    expect(wrapper.find(Reply).exists()).to.be.false
  })

  it('should render reply when the state changes ', () => {
    const wrapper = shallow(<Comment comment={{username: testUser}}/>)
    wrapper.setState({
      showReply: true
    })
    expect(wrapper.find(Reply).exists()).to.be.true
  })
})

describe(' <CommentAvatar /> ', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CommentAvatar />)
  })

  it('should not show tooltips initially ', () => {
    const wrapper = shallow(<CommentAvatar />)
    expect(wrapper.find(BigUserTooltip).exists()).to.be.false
  })

  it('should change state on mouse events', () => {
    const wrapper = shallow(<CommentAvatar />)
    wrapper.setProps(commentTestProps)
    expect(wrapper.state('showBigUserTooltip')).to.be.false
    wrapper.simulate('mouseenter')
    expect(wrapper.state('showBigUserTooltip')).to.be.true
    wrapper.simulate('mouseleave')
    expect(wrapper.state('showBigUserTooltip')).to.be.false
  })

  it('should show the BigUserTooltip on state change', () => {
    const wrapper = shallow(<CommentAvatar />)
    wrapper.setProps(commentTestProps)
    wrapper.setState({
      showBigUserTooltip: true
    })
    expect(wrapper.find(BigUserTooltip).exists()).to.be.true
  })
})

describe('<CommentContent />', () => {

  it('should render without crashing ', () => {
    /* REQUIRED TO GIVE IT THE PROPS  */
    const wrapper = shallow(<CommentContent comment={commentTestProps}/>)
  })

  it('should have the correct initial state', () => {
    const wrapper = shallow(<CommentContent comment={commentTestProps}/>)
    expect(wrapper.state('showTimeTooltip')).to.be.false
    expect(wrapper.state('showSimpleUserTooltip')).to.be.false
    expect(wrapper.state('showBigUserTooltip')).to.be.false
  })

  it('should change state on mouse events ', () => {
    const wrapper = shallow(<CommentContent comment={commentTestProps} />)
    
    //user .find and .first() to identify the nested span element with the listener
    const firstSpan = wrapper.find('span').first()
    firstSpan.simulate('mouseenter')
    expect(wrapper.state('showBigUserTooltip')).to.be.true
    expect(wrapper.state('showSimpleUserTooltip')).to.be.true
    firstSpan.simulate('mouseleave')
    expect(wrapper.state('showBigUserTooltip')).to.be.false
    expect(wrapper.state('showSimpleUserTooltip')).to.be.false

    //used .at(index) to identify the nested component
    const thirdSpan = wrapper.find('span').at(2)
    thirdSpan.simulate('mouseenter')
    expect(wrapper.state('showTimeTooltip')).to.be.true
    thirdSpan.simulate('mouseleave')
    expect(wrapper.state('showTimeTooltip')).to.be.false

  })

  it('should render correct tooltips on state change', () => {
    const wrapper = shallow(<CommentContent comment={commentTestProps} />)
    wrapper.setProps(commentTestProps)
    wrapper.setState({
      showTimeTooltip: true,
      showSimpleUserTooltip: false,
      showBigUserTooltip: false
    })
    expect(wrapper.find(SimpleTooltip).exists()).to.be.true
    wrapper.setState({
      showTimeTooltip: false,
      showSimpleUserTooltip: true,
      showBigUserTooltip: false
    })
    expect(wrapper.find(SimpleTooltip).exists()).to.be.true
    wrapper.setState({
      showTimeTooltip: false,
      showSimpleUserTooltip: false,
      showBigUserTooltip: true
    })
    expect(wrapper.find(BigUserTooltip).exists()).to.be.true
    })
})

describe('<CommentMeta />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CommentMeta comment={commentTestProps} />)
  })

  it('should have the correct initial state ', () => {
    const wrapper = shallow(<CommentMeta comment={commentTestProps} />)
    expect(wrapper.state('showDateTooltip')).to.be.false
    expect(wrapper.state('showReplyTooltip')).to.be.false
  })

  it('should change state on mouse events', () => {
    const wrapper = shallow(<CommentMeta comment={commentTestProps} />)

    const firstSpan = wrapper.find('span').first()
    firstSpan.simulate('mouseenter')
    expect(wrapper.state('showDateTooltip')).to.be.true
    firstSpan.simulate('mouseleave')
    expect(wrapper.state('showDateTooltip')).to.be.false

    //need to use mount to test nested components
    // const firstButton = wrapper.find('button').first()
    // firstButton.simulate('mouseenter')
    // expect(wrapper.state('showReplyTooltip')).to.be.true
    // firstButton.simulate('mouseleave')
    // expect(wrapper.state('showReplyTooltip')).to.be.false
  })
})

describe('<BigUserTooltip />', () => {
  it('should render without crashing ', () => {
    const wrapper = shallow(<BigUserTooltip style={testStyle}/>)
  })

  it('should have the correct initial state ', () => {
    // this.state = {
    //   showFollowersTooltip: false,
    //   showFollowButtonTooltip: false
    // }
    const wrapper = shallow(<BigUserTooltip style={testStyle} />)
    expect(wrapper.state('showFollowersTooltip')).to.be.false
    expect(wrapper.state('showFollowButtonTooltip')).to.be.false
  })

  it('should not show tooltips initially', () => {
    const wrapper = shallow(<BigUserTooltip style={testStyle} />)
    expect(wrapper.find(SimpleTooltip).exists()).to.be.false
  })

  it('should render tooltips on state change', () => {
    const wrapper = shallow(<BigUserTooltip style={testStyle} />)
    wrapper.setState({
      showFollowersTooltip: true,
      showFollowButtonTooltip: false
    })
    expect(wrapper.find(SimpleTooltip).exists()).to.be.true
    wrapper.setState({
      showFollowersTooltip: false,
      showFollowButtonTooltip: false
    })
    expect(wrapper.find(SimpleTooltip).exists()).to.be.false
    wrapper.setState({
      showFollowersTooltip: false,
      showFollowButtonTooltip: true
    })
    expect(wrapper.find(SimpleTooltip).exists()).to.be.true
  })
})

describe('<SimpleTooltip />', () => {
  it('should render without crashing ', () => {
    const wrapper = shallow(<SimpleTooltip style={testStyle} />)
  })
})

describe('<Reply />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Reply />)
  })
})