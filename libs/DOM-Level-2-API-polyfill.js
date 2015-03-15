;(function() {
    if (!Element.prototype.setAttributeNodeNS) {
        Element.prototype.setAttributeNodeNS = Element.prototype.setAttributeNode;
    }
    if (!Document.prototype.createAttributeNS) {
        Document.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
            var dummy = this.createElement('dummy');
            dummy.setAttributeNS(namespaceURI, qualifiedName, '');
            var attr = dummy.attributes[0];
            dummy.removeAttributeNode(attr);
            return attr;
        };
    }
})();