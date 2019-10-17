class Node {
	
	constructor(data, priority) {

		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

		if(this.left == null){
			this.left = node;
			node.parent = this;
			return;	
		}

		if(this.right == null){
			this.right = node;
			node.parent = this;
			return;
		}
	}

	removeChild(node) {

		let found = false;
		
		if(this.left == node){
			this.left = null;
			node.parent = null;
			found = true;	
		}

		if(this.right == node){
			this.right = null;
			node.parent = null;
			found = true;
		}
		
		if (! found) {throw new Error(' Node is not a child of this node');}
	}

	remove() {

		if(this.parent == null){return;}
		this.parent.removeChild(this);
	}

	swapWithParent() {

		if(this.parent == null){return;}
		
		let was_parent = this.parent;
		this.parent = was_parent.parent;
		
		if(was_parent.parent){
			if(was_parent.parent.left == was_parent){
				was_parent.parent.left = this;
			}
			else if (was_parent.parent.right == was_parent){
				was_parent.parent.right = this;
			}
		}
		
		was_parent.parent = this;
		
		let tmp;
		if(was_parent.left == this){
			if(was_parent.right) {
				was_parent.right.parent = this;	  
			}
			was_parent.left = this.left;
			if(was_parent.left){
				was_parent.left.parent = was_parent;
			}
			tmp = this.right;
			this.right = was_parent.right;
			was_parent.right = tmp;
			if(was_parent.right){
				was_parent.right.parent = was_parent;
			}
			this.left = was_parent;
		} 
		else if(was_parent.right == this){
			if(was_parent.left) {
				was_parent.left.parent = this;
			}
			was_parent.right = this.right;
			if(was_parent.right){
				was_parent.right.parent = was_parent;
			}
			tmp = this.left;
			this.left = was_parent.left;
			was_parent.left = tmp;
			if(was_parent.left){
				was_parent.left.parent = was_parent;
			}
			this.right = was_parent;
		}
	}

}

module.exports = Node;
