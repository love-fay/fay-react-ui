/**
 * Created by Administrator on 2018/8/14.
 */
import React from "react";
import Radio from "../../../../radio";

const stylePrefix = 'rj-rySelector-latelyContactorsBox';
const RadioGroup = Radio.Group;

function onChangeRadioGroup(e, latelyContactors, onChange) {
    let filter = latelyContactors.filter(ryItem => ryItem.username === e.target.value);
    onChange(filter);
}

const RidioDiv = ({value, label}) => {
    return (
        <div className={stylePrefix + '-radio'}>
            <Radio value={value}><span className="textOverflow" title={label}>{label}</span></Radio>
        </div>
    )
}

export default ({selectedRys, onChange}) => {
    let latelyContactors = JSON.parse(localStorage.getItem("latelyContactors"));
    let options = [], checkedValues = [];
    if (latelyContactors) {
        options = latelyContactors.map(item => {
            if (selectedRys.filter(selectedRyItem => selectedRyItem.username == item.username).length > 0) {
                checkedValues.push(item.username);
            }
            return ({
                label: item.nickname,
                value: item.username,
            });
        });
    }

    return (
        <div>
            <div>
                <span style={{fontWeight: "bold"}}>最近使用</span>
            </div>
            <div>
                <RadioGroup
                    value={checkedValues[0]}
                    onChange={ e => onChangeRadioGroup(e, latelyContactors, onChange)}
                >
                    {
                        options.map((item) => {
                            return <RidioDiv key={item.value}
                                             value={item.value}
                                             label={item.label}
                            />
                        })
                    }
                </RadioGroup>
            </div>
        </div>

    )
}