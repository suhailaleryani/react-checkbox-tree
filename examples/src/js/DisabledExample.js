import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodesData = [
    {
        value: '/app',
        label: 'app',
        children: [
            {
                value: '/app/Http',
                label: 'Http',
                children: [
                    {
                        value: '/app/Http/Controllers',
                        label: 'Controllers',
                        children: [{
                            value: '/app/Http/Controllers/WelcomeController.js',
                            label: 'WelcomeController.js',
                        }],
                    },
                    {
                        value: '/app/Http/routes.js',
                        label: 'routes.js',
                    },
                ],
            },
            {
                value: '/app/Providers',
                label: 'Providers',
                children: [{
                    value: '/app/Providers/EventServiceProvider.js',
                    label: 'EventServiceProvider.js',
                }],
            },
        ],
    },
    {
        value: '/config',
        label: 'config',
        children: [
            {
                value: '/config/app.js',
                label: 'app.js',
            },
            {
                value: '/config/database.js',
                label: 'database.js',
            },
        ],
    },
    {
        value: '/public',
        label: 'public',
        children: [
            {
                value: '/public/assets/',
                label: 'assets',
                children: [{
                    value: '/public/assets/style.css',
                    label: 'style.css',
                }],
            },
            {
                value: '/public/index.html',
                label: 'index.html',
            },
        ],
    },
    {
        value: '/.env',
        label: '.env',
    },
    {
        value: '/.gitignore',
        label: '.gitignore',
    },
    {
        value: '/README.md',
        label: 'README.md',
    },
];

class DisabledExample extends React.Component {
    state = {
        checked: [
            '/app/Http/Controllers/WelcomeController.js',
            '/app/Http/routes.js',
            '/public/assets/style.css',
            '/public/index.html',
            '/.gitignore',
        ],
        expanded: [
            '/app',
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
                disabled
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

export default DisabledExample;
