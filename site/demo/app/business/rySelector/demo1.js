/**
 * Created by Administrator on 2018/5/18.
 */
import React, {Component} from "react";
import Button from '../../../../../components/button'
import RySelectModal from 'rjd/rySelectModal';
import RySelectInput from 'rjd/rySelectInput';

export default class Demo1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selectedRys: [{
                username: '105842133',
                nickname: '王成全',
                orgName: '厦门市中级人民法院',
                departmentName: '院领导'
            }]
        }
    }

    render() {

        const Item = ({id, username, nickname,rybs, fyfjm, orgName, bmbs, departmentName}) => {
            return (
                <div>
                    id:{id}
                    &nbsp;&nbsp;&nbsp;&nbsp;username:{username}
                    &nbsp;&nbsp;&nbsp;&nbsp;nickname:{nickname}
                    &nbsp;&nbsp;&nbsp;&nbsp;rybs:{rybs}
                    &nbsp;&nbsp;&nbsp;&nbsp;fyfjm:{fyfjm}
                    &nbsp;&nbsp;&nbsp;&nbsp;orgName;{orgName}
                    &nbsp;&nbsp;&nbsp;&nbsp;bmbs:{bmbs}
                    &nbsp;&nbsp;&nbsp;&nbsp;departmentName:{departmentName}
                </div>
            )
        }

        return (
            <div>

                <RySelectModal
                    userRange={1}
                    defaultSelectedRys={this.state.selectedRys}
                    title="自定义标题"
                    visible={this.state.visible}
                    onCancel={(e)=>this.setState({visible: false})}
                    onOk={(selectedRys) => this.setState({selectedRys})}
                />

                <div>
                    <div style={{display: "inline-block"}}>人员选择：</div>
                    <div style={{display: "inline-block"}}>
                        <RySelectInput
                            selectedRys={this.state.selectedRys}
                            onChange={(selectedRys) => this.setState({selectedRys})}
                        />
                    </div>
                    <div style={{display: "inline-block"}}>
                        <Button type="primary" onClick={()=>this.setState({visible: true})}>打开</Button>
                    </div>
                </div>
                <RySelectInput
                    selectedRys={this.state.selectedRys}
                    onChange={(selectedRys) => this.setState({selectedRys})}
                />

                {
                    this.state.selectedRys.map(item => {
                        return <Item
                            key={item.username}
                            id={item.id}
                            username={item.username}
                            nickname={item.nickname}
                            rybs={item.rybs}
                            fyfjm={item.fyfjm}
                            orgName={item.orgName}
                            bmbs={item.bmbs}
                            departmentName={item.departmentName}
                        />
                    })
                }
            </div>

        )
    }

}