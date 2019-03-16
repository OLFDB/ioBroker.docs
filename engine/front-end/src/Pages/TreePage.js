import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SplitterLayout from 'react-splitter-layout';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import {FaFileAlt as IconDocument} from 'react-icons/fa';
import {FaFolder as IconFolder} from 'react-icons/fa';
import {FaFolderOpen as IconFolderOpened} from 'react-icons/fa';
import {MdExpandMore as IconCollapse} from 'react-icons/md';
import {MdKeyboardArrowRight as IconExpand} from 'react-icons/md';
import {MdUnfoldMore as IconExpandAll} from 'react-icons/md';
import {MdUnfoldLess as IconCollapseAll} from 'react-icons/md';

import MDPage from '../MDPage';
import Rooter from '../Rooter';
import I18n from '../i18n';

const styles = theme => ({
    expandButton: {
        width: 37,
        height: 37
    },
    element: {
        cursor: 'pointer',
        padding: 0,
        userSelect: 'none'
    },
    icon: {
        color: '#bdbdbd',
        marginRight: 5,
    },
    listItem: {
        padding: 0,
    },
    footer: {
        height: 24,
    },
    footerButtons: {
        '&:hover': {
            backgroundColor: '#dbdbdb'
        },
        color: theme.palette.type === 'dark' ? '#ffffff' : '#111111',
        cursor: 'pointer',
        marginTop: 1,
        marginRight: 2,
        height: 22,
        width: 22,
    },
    footerButtonsRight: {
        float: 'right'
    },
    list: {
        height: 'calc(100% - 38px)',
        overflow: 'auto'
    },
    drawer: {
        height: '100%',
        overflow: 'hidden'
    }
});

class Intro extends Rooter {
    constructor(props) {
        super(props);
        let expanded = window.localStorage ? window.localStorage.getItem('Docs.expanded') : '[]';
        try {
            expanded = JSON.parse(expanded) || [];
        } catch (e) {
            expanded = [];
        }
        const location = this.getLocation();
        this.state = {
            path: location.page || '',
            content: {},
            menuOpened: window.localStorage ? window.localStorage.getItem('Docs.menuOpened') !== 'false' : true,
            expanded,
            menuSize: window.localStorage ? parseFloat(window.localStorage.getItem('Docs.menuSize')) || 300 : 300
        };
        this.menuSize = this.state.menuSize;
        this.load();
    }

    load(contentPath) {
        contentPath = contentPath || this.props.contentPath;
        fetch(contentPath)
            .then(res => res.json())
            .then(content => {
                this.setState({content});
            });
    }

    onHashChange(location) {
        if (location.page !== this.state.path) {
            this.setState({path: location.page});
        }
    }

    saveExpanded(expanded) {
        window.localStorage.setItem('Docs.expanded', JSON.stringify(expanded || this.state.expanded));
    }

    onExpand(id, e) {
        e && e.stopPropagation();
        if (this.state.expanded.indexOf(id) === -1) {
            const expanded = this.state.expanded.concat([id]);
            this.setState({expanded});
            this.saveExpanded(expanded);
        }
    }

    onCollapse(id, e) {
        e && e.stopPropagation();
        const pos = this.state.expanded.indexOf(id);
        if (pos !== -1) {
            const expanded = this.state.expanded.concat([]);
            expanded.splice(pos, 1);
            this.setState({expanded});
            this.saveExpanded(expanded);
        }
    }
    onCollapseAll() {
        this.setState({expanded: []});
        this.saveExpanded([]);
    }

    getFolders(root, item, result) {
        root = root || this.state.content;
        result = result || [];
        if (root.pages) {
            item && result.push(item);

            Object.keys(root.pages).forEach(item =>
                this.getFolders(root.pages[item], item, result));
        }

        return result;
    }

    onExpandAll() {
        const expanded = this.getFolders();
        this.setState({expanded});
        this.saveExpanded(expanded);
    }

    renderFolderButtons(item, children, isExpanded) {
        if (children) {
            return (
                <IconButton className={this.props.classes.expandButton}
                            onClick={isExpanded ? e => this.onCollapse(item, e) : e => this.onExpand(item, e)}>
                    {isExpanded ? (<IconCollapse fontSize="small"/>) : (<IconExpand fontSize="small"/>)}
                </IconButton>
            );
        } else {
            return (<div className={this.props.classes.expandButton}/>);
        }
    }

    onNavigate(item, obj) {
        if (obj.pages && this.state.expanded.indexOf(item) === -1) {
            if (this.state.expanded.indexOf(item) === -1) {
                this.onExpand(item);
            } else {
                this.onCollapse(item);
            }
        }

        if (obj.content) {
            super.onNavigate(null, obj.content);
        }
    }

    renderMenuItem(root, item, level) {
        let isExpanded = true;

        if (root.pages && item) {
            isExpanded = this.state.expanded.indexOf(item) !== -1;
        }

        return [root.title ? (<ListItem
                key={item}
                className={this.props.classes.element}
                onClick={() => this.onNavigate(item, root)}>
                {this.renderFolderButtons(item, root.pages, isExpanded)}
                <ListItemIcon>{root.pages ? (isExpanded ? (<IconFolderOpened/>) : (<IconFolder/>)) : null}</ListItemIcon>
                <ListItemText
                    classes={{primary: item === this.state.selected ? this.props.classes.selected : undefined, root: this.props.classes.listItem}}
                    style={{}} primary={[
                        root.content ? (<IconDocument className={this.props.classes.icon}/>) : null,
                        root.title[this.props.language] || root.title.en
                ]}/>
            </ListItem>) : null,
            isExpanded && root.pages ? Object.keys(root.pages).map(p =>
                this.renderMenuItem(root.pages[p], p, level + 1)) : null
        ];
    }

    getBottomButtons() {
        return [
            (<IconExpandAll   key="expandAll" className={this.props.classes.footerButtons + ' ' + this.props.classes.footerButtonsRight} title={I18n.t('Expand all')} onClick={() => this.onExpandAll()}/>),
            this.state.expanded.length ? (<IconCollapseAll key="collapseAll" className={this.props.classes.footerButtons + ' ' + this.props.classes.footerButtonsRight} title={I18n.t('Collapse all')} onClick={() => this.onCollapseAll()}/>) : null,
        ];
    }

    onMenuOpenClose() {
        window.localStorage && window.localStorage.setItem('Docs.menuOpened', this.state.menuOpened ? 'false' : 'true');
        this.setState({menuOpened: !this.state.menuOpened});
    }

    render() {
        return (<SplitterLayout
            key="splitterLayout"
            vertical={false}
            primaryMinSize={100}
            primaryIndex={1}
            percentage={false}
            secondaryInitialSize={this.state.menuSize}
            onDragStart={() => this.setState({resizing: true})}
            onSecondaryPaneSizeChange={size => this.menuSize = parseFloat(size)}
            customClassName={this.props.classes.splitterDivs + ' ' + (!this.state.menuOpened ? this.props.classes.menuDivWithoutMenu : '')}
            onDragEnd={() => {
                window.localStorage && window.localStorage.setItem('Docs.menuSize', this.menuSize.toString());
                this.setState({resizing: false, menuSize: this.menuSize});
            }}
        >
            {this.state.menuOpened ? (<div className={this.props.classes.drawer}>
                <List className={this.props.classes.list}>{this.renderMenuItem(this.state.content, '', 0)}</List>
                <Divider/>
                <div className={this.props.classes.footer}>{this.getBottomButtons()}</div>
            </div>) : null}
            <MDPage
                onMenuOpenClose={!this.state.resizing ? () => this.onMenuOpenClose() : null}
                resizing={this.state.resizing }
                contentWidth={this.state.menuSize}
                menuOpened={this.state.menuOpened}
                onNavigate={this.props.onNavigate}
                language={this.props.language}
                theme={this.props.theme}
                mobil={this.props.mobile}
                path={this.state.path}
            />
        </SplitterLayout>);
    }
}

Intro.propTypes = {
    language: PropTypes.string,
    onNavigate: PropTypes.func,
    theme: PropTypes.string,
    mobile: PropTypes.bool,
    contentPath: PropTypes.string
};

export default withStyles(styles)(Intro);
