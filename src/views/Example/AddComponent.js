import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
          title: event.target.value
        })
      }
      handleChangeSalary = (event) => {
        this.setState({
          salary: event.target.value
        })
      }
      handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
          alert('Missing required params')
          return;
        }
        console.log('>>> check data input: ', this.state)
        //goi function addNewJob
        this.props.addNewJob({
            //truyen len thang cha 1 bien object gom 3 phan tu id, title va salary lay tai state cua thang con
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary 
        })
        this.setState({//code nay de sau khi this.prop.addNewJob duoc goi va chay logic thanh cong thi input thanh rong
          title:'',
          salary:''
        })
      }
    render() {
        return(
            <form>
            <label htmlFor="fname">Job's title:</label><br />
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handleChangeTitleJob(event)}
            />
            <br />
            <label htmlFor="lname">Salary:</label><br />
            <input
              type="text"
              value={this.state.salary}
              onChange={(event) => this.handleChangeSalary(event)}
            />
            <br /><br />
            <input type="submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </form>
        )
    }
}

export default AddComponent;