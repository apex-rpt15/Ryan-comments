import { expect } from 'chai';
import { shallow } from 'enzyme';
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

  it('should show the BigUserTooltip on state change', () => {
    const wrapper = shallow(<CommentAvatar />)
    wrapper.setProps({
      comment: {
        userPhoto: testAvatar,
        userName: testUser,
        userFollowers: 100
      }
    })
    wrapper.setState({
      showBigUserTooltip: true
    })
    expect(wrapper.find(BigUserTooltip).exists()).to.be.true
  })
})


