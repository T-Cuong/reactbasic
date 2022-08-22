import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
  //key:value
  state = {

    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500 ' },
      { id: 'abcJob2', title: 'Testers', salary: '400 ' },
      { id: 'abcJob3', title: 'Project managers', salary: '1000' }
    ]
  }
  //job la data ta nhap vao form tren web
  addNewJob = (job) => {
    // console.log('check job ', job)
    // let currentJobs = this.state.arrJobs;
    //currentJobs.push(job)
    //setState  giúp bạn cập nhật lại dữ liệu website mà ko cần refresh pag
    this.setState({
      arrJobs: [...this.state.arrJobs, job]//cap nhap bien arrJobs va day them vao job, giai thich code khi ta dung [] la tao array ... la toan tu coppy nghia la cop tat ca phan tu cua array va tao them phan tu vao cuoi cung la job
      // arrJobs: currentJobs
    })
  }
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id);//khi ta bam x fiter loc va tra ve mang co id ko bao gom id cua phan tu bi xoa
    this.setState({
      arrJobs: currentJobs
    })
  }

  //componentDiUpdate de update DOM prevProp, prevSate dai dien cho qua khu va hien tai de so sanh va update 
  componentDidUpdate(prevProp, prevState){
    console.log('>>> run didupdate: ', 'prev state:', prevState,'current state:',this.state)
  }
   

  //componentDidMount la mot noi thich hop de goi API
  componentDidMount() {
    console.log('>> run')
  }

  /* 
  JSX => return block
  fragment
  */

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('>>> check data input: ', this.state)
  }
  //re-render
  render() {
    console.log('>>> call render: ', this.state)
    return (
      <>
        <AddComponent
          //truyen funtion addNewjob vao addcomponent
          addNewJob={this.addNewJob}
        />


        <ChildComponent
          //truyen cac ham tu thang cha xuong thang con 
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />


      </>
    )
  }
}
export default MyComponent;