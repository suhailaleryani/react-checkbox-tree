import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodesData = [
    {
        value: 'Documents',
        label: 'Documents',
        children: [
            {
                value: 'Employee Evaluations.zip',
                label: 'Employee Evaluations.zip',
                icon: <i className="far fa-file-archive" />,
            },
            {
                value: 'Expense Report.pdf',
                label: 'Expense Report.pdf',
                icon: <i className="far fa-file-pdf" />,
            },
            {
                value: 'notes.txt',
                label: 'notes.txt',
                icon: <i className="far fa-file-alt" />,
            },
        ],
    },
    {
        value: 'Photos',
        label: 'Photos',
        children: [
            {
                value: 'nyan-cat.gif',
                label: 'nyan-cat.gif',
                icon: <i className="far fa-file-image" />,
            },
            {
                value: 'SpaceX Falcon9 liftoff.jpg',
                label: 'SpaceX Falcon9 liftoff.jpg',
                icon: <i className="far fa-file-image" />,
            },
        ],
    },
];

class CustomIconsExamples extends React.Component {
    state = {
        checked: [],
        expanded: [
            'Documents',
        ],
        nodes: nodesData,
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    onOrderChange = (orderedNodes) => {
        this.setState({
            nodes: orderedNodes,
        });
    }

    render() {
        const { checked, expanded, nodes } = this.state;

        return (
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
                orderable
                onOrderChange={this.onOrderChange}
            />
        );
    }
}

export default CustomIconsExamples;
