import React from 'react';
import './Demo.css'

class ChildComponent extends React.Component {
    //re-render
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>>handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" 
                        onClick={() => this.handleShowHide()}>
                            Show
                            </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>{/**nhan vao dau x de xoa nghe nghiep trong list */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })

//                 }

//             </div>
//         </>
//     )
// }
export default ChildComponent;