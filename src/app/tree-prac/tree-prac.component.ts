import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { FileDatabaseService, FileFlatNode, FileNode } from './shared';
import { Observable, of as observableOf} from 'rxjs';



/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-tree-prac',
  templateUrl: './tree-prac.component.html',
  styleUrls: ['./tree-prac.component.css'],
  providers: [ FileDatabaseService ]
})
export class TreePracComponent implements OnInit {

  treeControl: FlatTreeControl<FileFlatNode>;

  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  dataType = 0;

  constructor(private database: FileDatabaseService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {
    this.database.initialize(0);
  }

  transformer = (node: FileNode, level: number) => {
    let flatNode = new FileFlatNode();
    flatNode.filename = node.filename;
    flatNode.type = node.type;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    return flatNode;
  }

  private _getLevel = (node: FileFlatNode) => { return node.level; };

  private _isExpandable = (node: FileFlatNode) => { return node.expandable; };

  private _getChildren = (node: FileNode): Observable<FileNode[]> => {
    return observableOf(node.children);
  }

  hasChild = (_: number, _nodeData: FileFlatNode) => { return _nodeData.expandable; };

  toggle() {
    if (this.dataType === 0) {
      this.database.fetchTreeData(1);
      this.dataType = 1;
    } else if (this.dataType === 1) {
      this.database.fetchTreeData(0);
      this.dataType = 0;
    }
  }
}
