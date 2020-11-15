var searchIndex = JSON.parse('{\
"nekolib":{"doc":"ねこちゃんライブラリ。","i":[[0,"algo","nekolib","アルゴリズムたち。",null,null],[5,"bisect","nekolib::algo","二分探索で境界を探す。",null,[[["fn",8]]]],[5,"extremum","","三分探索で極値を探す。",null,[[["range",3]]]],[5,"extremum_float","","三分探索で極値を探す。",null,[[["range",3]]]],[5,"minmax","","スライスの最小値および最大値を求める。",null,[[],["option",4]]],[5,"minmax_by","","比較関数 `compare` におけるスライスの最小値および最大値を求める。",null,[[["fnmut",8]],["option",4]]],[5,"minmax_by_key","","キー `key` におけるスライスの最小値および最大値を求める。",null,[[],["option",4]]],[5,"mo","","Mo\'s algorithm。",null,[[["vec",3],["option",4]],["vec",3]]],[5,"parallel_bisect","","並列二分探索を行う。",null,[[["statefulpred",8],["vec",3]],["vec",3]]],[5,"tortoise_hare","","周期検出を行う。",null,[[]]],[5,"window_bisect","","尺取り法で、各始端に対して境界を探す。",null,[[],["vec",3]]],[0,"bisect","","二分探索。",null,null],[5,"bisect","nekolib::algo::bisect","二分探索で境界を探す。",null,[[["fn",8]]]],[0,"extremum","nekolib::algo","三分探索。",null,null],[5,"extremum","nekolib::algo::extremum","三分探索で極値を探す。",null,[[["range",3]]]],[0,"extremum_float","nekolib::algo","三分探索（実数）。",null,null],[5,"extremum_float","nekolib::algo::extremum_float","三分探索で極値を探す。",null,[[["range",3]]]],[0,"minmax","nekolib::algo","スライスの最小値・最大値を求める。",null,null],[5,"minmax","nekolib::algo::minmax","スライスの最小値および最大値を求める。",null,[[],["option",4]]],[5,"minmax_by_key","","キー `key` におけるスライスの最小値および最大値を求める。",null,[[],["option",4]]],[5,"minmax_by","","比較関数 `compare` におけるスライスの最小値および最大値を求める。",null,[[["fnmut",8]],["option",4]]],[0,"mo","nekolib::algo","Mo\'s algorithm。",null,null],[5,"mo","nekolib::algo::mo","Mo\'s algorithm。",null,[[["vec",3],["option",4]],["vec",3]]],[0,"parallel_bisect","nekolib::algo","並列二分探索。",null,null],[5,"parallel_bisect","nekolib::algo::parallel_bisect","並列二分探索を行う。",null,[[["statefulpred",8],["vec",3]],["vec",3]]],[0,"tortoise_hare","nekolib::algo","周期検出。",null,null],[5,"tortoise_hare","nekolib::algo::tortoise_hare","周期検出を行う。",null,[[]]],[0,"window_bisect","nekolib::algo","尺取り法。",null,null],[5,"window_bisect","nekolib::algo::window_bisect","尺取り法で、各始端に対して境界を探す。",null,[[],["vec",3]]],[0,"ds","nekolib","データ構造たち。",null,null],[3,"DisjointSparseTable","nekolib::ds","disjoint sparse table。",null,null],[3,"FoldableDeque","","fold 可能両端キュー。",null,null],[3,"FoldableQueue","","fold 可能キュー。",null,null],[3,"IntervalSet","","区間の集合。",null,null],[3,"UnionFind","","union-find。",null,null],[3,"VecActSegtree","","",null,null],[3,"VecSegtree","","`Vec` ベースのセグ木。",null,null],[0,"disjoint_sparse_table","","disjoint sparse table。",null,null],[3,"DisjointSparseTable","nekolib::ds::disjoint_sparse_table","disjoint sparse table。",null,null],[0,"foldable_deque","nekolib::ds","fold 可能両端キュー。",null,null],[3,"FoldableDeque","nekolib::ds::foldable_deque","fold 可能両端キュー。",null,null],[11,"new","","",0,[[]]],[0,"foldable_queue","nekolib::ds","fold 可能キュー。",null,null],[3,"FoldableQueue","nekolib::ds::foldable_queue","fold 可能キュー。",null,null],[11,"new","","",1,[[]]],[0,"interval_set","nekolib::ds","区間の集合。",null,null],[3,"IntervalSet","nekolib::ds::interval_set","区間の集合。",null,null],[11,"new","","空集合で初期化する。",2,[[]]],[11,"insert","","区間 `r` を追加する。",2,[[["rangebounds",8]]]],[11,"remove","","区間 `r` を削除する。",2,[[["rangebounds",8]]]],[11,"clear","","空集合に戻す。",2,[[]]],[11,"mex","","`x` 以上の値で、集合中の区間に含まれない最小のものを返す。",2,[[],["bound",4]]],[11,"covering","","区間 `r` を含む区間の両端を返す。",2,[[],["option",4]]],[11,"has_range","","区間 `r` を含んでいれば `true` を返す。",2,[[]]],[0,"union_find","nekolib::ds","union-find。",null,null],[3,"UnionFind","nekolib::ds::union_find","union-find。",null,null],[0,"vec_act_segtree","nekolib::ds","`Vec` ベースの区間作用セグ木。",null,null],[3,"VecActSegtree","nekolib::ds::vec_act_segtree","",null,null],[11,"new","","",3,[[]]],[11,"is_empty","","",3,[[]]],[11,"len","","",3,[[]]],[0,"vec_segtree","nekolib::ds","`Vec` ベースのセグ木。",null,null],[3,"VecSegtree","nekolib::ds::vec_segtree","`Vec` ベースのセグ木。",null,null],[11,"new","","",4,[[]]],[11,"is_empty","","",4,[[]]],[11,"len","","",4,[[]]],[0,"graph","nekolib","グラフに関するものたち。",null,null],[5,"dijkstra","nekolib::graph","Dijkstra 法に基づく最短距離。",null,[[],[["option",4],["vec",3]]]],[5,"scc","","lowlink に基づく強連結成分分解。",null,[[],["vec",3]]],[0,"dijkstra","","最短距離 (Dijkstra)。",null,null],[5,"dijkstra","nekolib::graph::dijkstra","Dijkstra 法に基づく最短距離。",null,[[],[["option",4],["vec",3]]]],[0,"scc","nekolib::graph","強連結成分分解。",null,null],[5,"scc","nekolib::graph::scc","lowlink に基づく強連結成分分解。",null,[[],["vec",3]]],[0,"math","nekolib","数学関連のアルゴリズムたち。",null,null],[3,"ModInt","nekolib::math","",null,null],[0,"modint","","法 $m$ での演算をする。",null,null],[3,"ModInt","nekolib::math::modint","",null,null],[0,"seq","nekolib","文字列アルゴリズムたち。",null,null],[3,"KmpSearcher","nekolib::seq","",null,null],[3,"SuffixArray","","接尾辞配列。",null,null],[3,"ZSearcher","","Z algorithm。",null,null],[0,"kmp","","",null,null],[3,"KmpSearcher","nekolib::seq::kmp","",null,null],[3,"Occurrences","","",null,null],[11,"occurrences","","",5,[[],["occurrences",3]]],[0,"suffix_array","nekolib::seq","接尾辞配列。",null,null],[3,"SuffixArray","nekolib::seq::suffix_array","接尾辞配列。",null,null],[11,"search","","",6,[[["asref",8]]]],[0,"z_algo","nekolib::seq","Z algorithm。",null,null],[3,"ZSearcher","nekolib::seq::z_algo","Z algorithm。",null,null],[3,"Occurrences","","",null,null],[11,"occurrences","","",7,[[],["occurrences",3]]],[0,"traits","nekolib","トレイトたち。",null,null],[0,"act","nekolib::traits","区間作用に関するトレイトです。",null,null],[8,"Act","nekolib::traits::act","区間作用を行う。",null,null],[16,"Action","","`r` で指定される区間に作用を行う。",8,null],[10,"act","","",8,[[]]],[0,"action","nekolib::traits","作用モノイド。",null,null],[8,"MonoidAction","nekolib::traits::action","作用モノイド。",null,null],[16,"Operator","","作用を行う型。",9,null],[16,"Operand","","作用される型。",9,null],[10,"act","","作用を行う。",9,[[]]],[0,"additive","nekolib::traits","加法に関するトレイトたちです。",null,null],[8,"Zero","nekolib::traits::additive","加法の単位元 $0$ を定義する。",null,null],[10,"zero","","加法の単位元 $0$ を返す。",10,[[]]],[8,"AddAssoc","","加法が結合法則を満たすことを示す。",null,null],[8,"AddComm","","加法が交換法則を満たすことを示す。",null,null],[0,"assoc_val","nekolib::traits","型に紐づく値。",null,null],[8,"AssocVal","nekolib::traits::assoc_val","値を返す関数を持つ。",null,null],[10,"get","","",11,[[]]],[0,"binop","nekolib::traits","代数的構造に関するトレイトたちです。",null,null],[8,"Magma","nekolib::traits::binop","マグマ。",null,null],[16,"Set","","集合 $M$ に対応する型。",12,null],[10,"op","","$x \\\\circ y$ を返す。",12,[[]]],[8,"Associative","","結合法則を満たす。",null,null],[8,"Identity","","単位元を持つ。",null,null],[10,"id","","単位元を返す。",13,[[]]],[8,"Commutative","","交換法則を満たす。",null,null],[8,"PartialRecip","","逆元を持つ要素が存在する。",null,null],[10,"partial_recip","","",14,[[],["option",4]]],[8,"Recip","","逆元が常に存在する。",null,null],[11,"recip","","",15,[[]]],[8,"Distributive","","分配法則を満たす。",null,null],[8,"Semigroup","","半群。",null,null],[8,"Monoid","","モノイド。",null,null],[8,"CommutativeMonoid","","可換モノイド。",null,null],[8,"Group","","群。",null,null],[8,"CommutativeGroup","","可換群。",null,null],[8,"Ring","","環。",null,null],[16,"Set","","集合 $R$ に対応する型。",16,null],[16,"Additive","","可換群 $(R, \\\\circ, 0)$ に対応する型。",16,null],[16,"Multiplicative","","モノイド $(R, \\\\ast, 1)$ に対応する型。",16,null],[11,"add","","和 $x \\\\circ y$ を返す。",16,[[]]],[11,"zero","","加法 $\\\\circ$ の単位元 $0$ を返す。",16,[[]]],[11,"neg","","加法 $\\\\circ$ に関する $x$ の逆元 $-x$ を返す。",16,[[]]],[11,"mul","","積 $x \\\\ast y$ を返す。",16,[[]]],[11,"one","","乗法 $\\\\ast$ の単位元 $1$ を返す。",16,[[]]],[8,"CommutativeRing","","可換環。",null,null],[8,"Field","","体。",null,null],[11,"recip","","乗法 $\\\\ast$ における関する $x$ の逆元 $x^{-1}$ を返す。",17,[[]]],[0,"disjoint_set","nekolib::traits","素集合に関するトレイトです。",null,null],[8,"DisjointSet","nekolib::traits::disjoint_set","共通要素を持たない集合族で、併合が可能なもの。",null,null],[10,"new","","集合族を $\\\\{\\\\{0\\\\}, \\\\{1\\\\}, \\\\dots, \\\\{n-1\\\\}\\\\}$ で初期化する。",18,[[]]],[10,"len","","集合族全体に含まれる要素数 $n$ を返す。",18,[[]]],[11,"is_empty","","集合族が空であれば `true` を返す。",18,[[]]],[10,"unite","","$u$ を含む集合と $v$ を含む集合を併合する。 集合族に変化があれば `true` を返す。 $u$ と…",18,[[]]],[10,"repr","","$u$ を含む集合の代表元を返す。",18,[[]]],[10,"count","","$u$ を含む集合の要素数を返す。",18,[[]]],[11,"equiv","","$u$ と $v$ が同じ集合に含まれていれば `true` を返す。",18,[[]]],[11,"subset","","$u$ を含む集合の要素を列挙する。",18,[[],["vec",3]]],[0,"elastic_slice","nekolib::traits","",null,null],[8,"ExpandFront","nekolib::traits::elastic_slice","",null,null],[10,"expand_front","","",19,[[]]],[8,"ExpandBack","","",null,null],[10,"expand_back","","",20,[[]]],[8,"ShrinkFront","","",null,null],[10,"shrink_front","","",21,[[]]],[8,"ShrinkBack","","",null,null],[10,"shrink_back","","",22,[[]]],[8,"ElasticSlice","","",null,null],[10,"reset","","",23,[[]]],[10,"full_len","","",23,[[]]],[10,"start","","",23,[[]]],[10,"end","","",23,[[]]],[11,"len","","",23,[[]]],[11,"is_empty","","",23,[[]]],[8,"SliceHash","","",null,null],[16,"Salt","","",24,null],[16,"Hashed","","",24,null],[10,"hash","","",24,[[]]],[0,"fold","nekolib::traits","区間和に関するトレイトです。",null,null],[8,"Fold","nekolib::traits::fold","区間和を求める。",null,null],[16,"Output","","",25,null],[10,"fold","","`r` で指定される区間の和を返す。",25,[[]]],[0,"fold_bisect","nekolib::traits","区間和の二分探索に関するトレイトたち。",null,null],[8,"FoldBisect","nekolib::traits::fold_bisect","左端を固定したときの境界を求める。",null,null],[10,"fold_bisect","","添字 `l` と述語 `pred` を引数に取り、次の条件を満たす `r` を返す。 ただし、区間長を `n`…",26,[[]]],[8,"FoldBisectRev","","右端を固定したときの境界を求める。",null,null],[10,"fold_bisect_rev","","添字 `r` と述語 `pred` を引数に取り、次の条件を満たす `l` を返す。 -…",27,[[]]],[0,"get_mut","nekolib::traits","",null,null],[8,"GetMut","nekolib::traits::get_mut","",null,null],[16,"Output","","",28,null],[10,"get_mut","","",28,[[],["option",4]]],[0,"max","nekolib::traits","最大元に関するトレイトです。",null,null],[8,"Max","nekolib::traits::max","最大元を持つ。",null,null],[10,"max","","最大元を返す。",29,[[]]],[0,"min","nekolib::traits","最小元に関するトレイトです。",null,null],[8,"Min","nekolib::traits::min","最小元を持つ。",null,null],[10,"min","","最小元を返す。",30,[[]]],[0,"multiplicative","nekolib::traits","乗法に関するトレイトたちです。",null,null],[8,"One","nekolib::traits::multiplicative","乗法の単位元 $1$ を定義する。",null,null],[10,"one","","乗法の単位元 $1$ を返す。",31,[[]]],[8,"MulRecip","","乗法の逆元を定義する。",null,null],[16,"Output","","返り値の型。",32,null],[10,"mul_recip","","乗法における $x$ の逆元 $x^{-1}$ を返す。",32,[[]]],[8,"MulAssoc","","乗法が結合法則を満たすことを示す。",null,null],[8,"MulComm","","乗法が交換法則を満たすことを示す。",null,null],[0,"push_pop","nekolib::traits","",null,null],[8,"Push","nekolib::traits::push_pop","",null,null],[16,"Input","","",33,null],[10,"push","","",33,[[]]],[8,"PushFront","","",null,null],[16,"Input","","",34,null],[10,"push_front","","",34,[[]]],[8,"PushBack","","",null,null],[16,"Input","","",35,null],[10,"push_back","","",35,[[]]],[8,"Pop","","",null,null],[16,"Output","","",36,null],[10,"pop","","",36,[[],["option",4]]],[8,"PopFront","","",null,null],[16,"Output","","",37,null],[10,"pop_front","","",37,[[],["option",4]]],[8,"PopBack","","",null,null],[16,"Output","","",38,null],[10,"pop_back","","",38,[[],["option",4]]],[0,"range_bounds","nekolib::traits","区間に関するトレイトです。",null,null],[8,"StartBounded","nekolib::traits::range_bounds","左側が有界である区間。",null,null],[8,"StartInclusive","","左側が閉である区間。",null,null],[8,"StartUnbounded","","左側が非有界である区間。",null,null],[8,"EndBounded","","右側が有界である区間。",null,null],[8,"EndExclusive","","右側が開である区間。",null,null],[8,"EndInclusive","","右側が閉である区間。",null,null],[8,"EndUnbounded","","右側が非有界である区間。",null,null],[0,"set_value","nekolib::traits","値の代入に関するトレイトです。",null,null],[8,"SetValue","nekolib::traits::set_value","値の代入ができることを示す。",null,null],[16,"Input","","代入される型。",39,null],[10,"set_value","","`i` で指定される要素に `x` を代入する。",39,[[]]],[0,"stateful_predicate","nekolib::traits","",null,null],[8,"StatefulPred","nekolib::traits::stateful_predicate","",null,null],[16,"Input","","",40,null],[10,"count","","",40,[[]]],[10,"next","","",40,[[]]],[10,"pred","","",40,[[]]],[10,"reset","","",40,[[]]],[8,"Act","nekolib::traits","区間作用を行う。",null,null],[16,"Action","","`r` で指定される区間に作用を行う。",8,null],[10,"act","","",8,[[]]],[8,"MonoidAction","","作用モノイド。",null,null],[16,"Operator","","作用を行う型。",9,null],[16,"Operand","","作用される型。",9,null],[10,"act","","作用を行う。",9,[[]]],[8,"AddAssoc","","加法が結合法則を満たすことを示す。",null,null],[8,"AddComm","","加法が交換法則を満たすことを示す。",null,null],[8,"Zero","","加法の単位元 $0$ を定義する。",null,null],[10,"zero","","加法の単位元 $0$ を返す。",10,[[]]],[8,"AssocVal","","値を返す関数を持つ。",null,null],[10,"get","","",11,[[]]],[8,"Associative","","結合法則を満たす。",null,null],[8,"Commutative","","交換法則を満たす。",null,null],[8,"CommutativeGroup","","可換群。",null,null],[8,"CommutativeMonoid","","可換モノイド。",null,null],[8,"CommutativeRing","","可換環。",null,null],[8,"Distributive","","分配法則を満たす。",null,null],[8,"Field","","体。",null,null],[11,"recip","","乗法 $\\\\ast$ における関する $x$ の逆元 $x^{-1}$ を返す。",17,[[]]],[8,"Group","","群。",null,null],[8,"Identity","","単位元を持つ。",null,null],[10,"id","","単位元を返す。",13,[[]]],[8,"Magma","","マグマ。",null,null],[16,"Set","","集合 $M$ に対応する型。",12,null],[10,"op","","$x \\\\circ y$ を返す。",12,[[]]],[8,"Monoid","","モノイド。",null,null],[8,"PartialRecip","","逆元を持つ要素が存在する。",null,null],[10,"partial_recip","","",14,[[],["option",4]]],[8,"Recip","","逆元が常に存在する。",null,null],[11,"recip","","",15,[[]]],[8,"Ring","","環。",null,null],[16,"Set","","集合 $R$ に対応する型。",16,null],[16,"Additive","","可換群 $(R, \\\\circ, 0)$ に対応する型。",16,null],[16,"Multiplicative","","モノイド $(R, \\\\ast, 1)$ に対応する型。",16,null],[11,"add","","和 $x \\\\circ y$ を返す。",16,[[]]],[11,"zero","","加法 $\\\\circ$ の単位元 $0$ を返す。",16,[[]]],[11,"neg","","加法 $\\\\circ$ に関する $x$ の逆元 $-x$ を返す。",16,[[]]],[11,"mul","","積 $x \\\\ast y$ を返す。",16,[[]]],[11,"one","","乗法 $\\\\ast$ の単位元 $1$ を返す。",16,[[]]],[8,"Semigroup","","半群。",null,null],[8,"DisjointSet","","共通要素を持たない集合族で、併合が可能なもの。",null,null],[10,"new","","集合族を $\\\\{\\\\{0\\\\}, \\\\{1\\\\}, \\\\dots, \\\\{n-1\\\\}\\\\}$ で初期化する。",18,[[]]],[10,"len","","集合族全体に含まれる要素数 $n$ を返す。",18,[[]]],[11,"is_empty","","集合族が空であれば `true` を返す。",18,[[]]],[10,"unite","","$u$ を含む集合と $v$ を含む集合を併合する。 集合族に変化があれば `true` を返す。 $u$ と…",18,[[]]],[10,"repr","","$u$ を含む集合の代表元を返す。",18,[[]]],[10,"count","","$u$ を含む集合の要素数を返す。",18,[[]]],[11,"equiv","","$u$ と $v$ が同じ集合に含まれていれば `true` を返す。",18,[[]]],[11,"subset","","$u$ を含む集合の要素を列挙する。",18,[[],["vec",3]]],[8,"ElasticSlice","","",null,null],[10,"reset","","",23,[[]]],[10,"full_len","","",23,[[]]],[10,"start","","",23,[[]]],[10,"end","","",23,[[]]],[11,"len","","",23,[[]]],[11,"is_empty","","",23,[[]]],[8,"ExpandBack","","",null,null],[10,"expand_back","","",20,[[]]],[8,"ExpandFront","","",null,null],[10,"expand_front","","",19,[[]]],[8,"ShrinkBack","","",null,null],[10,"shrink_back","","",22,[[]]],[8,"ShrinkFront","","",null,null],[10,"shrink_front","","",21,[[]]],[8,"SliceHash","","",null,null],[16,"Salt","","",24,null],[16,"Hashed","","",24,null],[10,"hash","","",24,[[]]],[8,"Fold","","区間和を求める。",null,null],[16,"Output","","",25,null],[10,"fold","","`r` で指定される区間の和を返す。",25,[[]]],[8,"FoldBisect","","左端を固定したときの境界を求める。",null,null],[10,"fold_bisect","","添字 `l` と述語 `pred` を引数に取り、次の条件を満たす `r` を返す。 ただし、区間長を `n`…",26,[[]]],[8,"FoldBisectRev","","右端を固定したときの境界を求める。",null,null],[10,"fold_bisect_rev","","添字 `r` と述語 `pred` を引数に取り、次の条件を満たす `l` を返す。 -…",27,[[]]],[8,"GetMut","","",null,null],[16,"Output","","",28,null],[10,"get_mut","","",28,[[],["option",4]]],[8,"Max","","最大元を持つ。",null,null],[10,"max","","最大元を返す。",29,[[]]],[8,"Min","","最小元を持つ。",null,null],[10,"min","","最小元を返す。",30,[[]]],[8,"MulAssoc","","乗法が結合法則を満たすことを示す。",null,null],[8,"MulComm","","乗法が交換法則を満たすことを示す。",null,null],[8,"MulRecip","","乗法の逆元を定義する。",null,null],[16,"Output","","返り値の型。",32,null],[10,"mul_recip","","乗法における $x$ の逆元 $x^{-1}$ を返す。",32,[[]]],[8,"One","","乗法の単位元 $1$ を定義する。",null,null],[10,"one","","乗法の単位元 $1$ を返す。",31,[[]]],[8,"Pop","","",null,null],[16,"Output","","",36,null],[10,"pop","","",36,[[],["option",4]]],[8,"PopBack","","",null,null],[16,"Output","","",38,null],[10,"pop_back","","",38,[[],["option",4]]],[8,"PopFront","","",null,null],[16,"Output","","",37,null],[10,"pop_front","","",37,[[],["option",4]]],[8,"Push","","",null,null],[16,"Input","","",33,null],[10,"push","","",33,[[]]],[8,"PushBack","","",null,null],[16,"Input","","",35,null],[10,"push_back","","",35,[[]]],[8,"PushFront","","",null,null],[16,"Input","","",34,null],[10,"push_front","","",34,[[]]],[8,"EndBounded","","右側が有界である区間。",null,null],[8,"EndExclusive","","右側が開である区間。",null,null],[8,"EndInclusive","","右側が閉である区間。",null,null],[8,"EndUnbounded","","右側が非有界である区間。",null,null],[8,"StartBounded","","左側が有界である区間。",null,null],[8,"StartInclusive","","左側が閉である区間。",null,null],[8,"StartUnbounded","","左側が非有界である区間。",null,null],[8,"SetValue","","値の代入ができることを示す。",null,null],[16,"Input","","代入される型。",39,null],[10,"set_value","","`i` で指定される要素に `x` を代入する。",39,[[]]],[8,"StatefulPred","","",null,null],[16,"Input","","",40,null],[10,"count","","",40,[[]]],[10,"next","","",40,[[]]],[10,"pred","","",40,[[]]],[10,"reset","","",40,[[]]],[0,"utils","nekolib","便利ちゃんたち。",null,null],[3,"OpAdd","nekolib::utils","和を返す演算を持つ。",null,null],[3,"OpMax","","最大値を返す演算を持つ。",null,null],[3,"OpMin","","最小値を返す演算を持つ。",null,null],[3,"OpMul","","積を返す演算を持つ。",null,null],[3,"OpRollHash","","文字列連結をローリングハッシュで行う演算を持つ。",null,null],[3,"Scanner","","スキャナ。",null,null],[5,"bounds_within","","区間を配列サイズに収まるように丸める。",null,[[["rangebounds",8]],["range",3]]],[0,"buf_range","","配列上の区間に関する関数。",null,null],[5,"bounds_within","nekolib::utils::buf_range","区間を配列サイズに収まるように丸める。",null,[[["rangebounds",8]],["range",3]]],[0,"op_add","nekolib::utils","加法に関する wrapper クラス。",null,null],[3,"OpAdd","nekolib::utils::op_add","和を返す演算を持つ。",null,null],[0,"op_max","nekolib::utils","最大値に関する wrapper クラス。",null,null],[3,"OpMax","nekolib::utils::op_max","最大値を返す演算を持つ。",null,null],[0,"op_min","nekolib::utils","最小値に関する wrapper クラス。",null,null],[3,"OpMin","nekolib::utils::op_min","最小値を返す演算を持つ。",null,null],[0,"op_mul","nekolib::utils","乗法に関する wrapper クラス。",null,null],[3,"OpMul","nekolib::utils::op_mul","積を返す演算を持つ。",null,null],[0,"op_roll_hash","nekolib::utils","ローリングハッシュに関する wrapper クラス。",null,null],[3,"OpRollHash","nekolib::utils::op_roll_hash","文字列連結をローリングハッシュで行う演算を持つ。",null,null],[11,"val_from","","",41,[[]]],[0,"scanner","nekolib::utils","スキャナ。",null,null],[3,"Scanner","nekolib::utils::scanner","スキャナ。",null,null],[3,"ScanTupleError","","",null,null],[8,"Scan","","",null,null],[16,"Err","","",42,null],[10,"scan","","",42,[[]]],[11,"from_stdin","","",43,[[],[["result",4],["error",3]]]],[11,"next","","",43,[[],[["scan",8],["result",4]]]],[11,"next_m1","","",43,[[],["result",4]]],[11,"next_n","","",43,[[],[["result",4],["vec",3]]]],[11,"get_while","","",43,[[]]],[11,"get_line","","",43,[[]]],[11,"ignore","","",43,[[]]],[11,"ignore_while","","",43,[[]]],[14,"impl_mod_int","nekolib","",null,null],[14,"impl_assoc_val","","",null,null],[11,"from","nekolib::ds::disjoint_sparse_table","",44,[[]]],[11,"into","","",44,[[]]],[11,"try_from","","",44,[[],["result",4]]],[11,"try_into","","",44,[[],["result",4]]],[11,"borrow","","",44,[[]]],[11,"borrow_mut","","",44,[[]]],[11,"type_id","","",44,[[],["typeid",3]]],[11,"from","nekolib::ds::foldable_deque","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","nekolib::ds::foldable_queue","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","nekolib::ds::interval_set","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","nekolib::ds::union_find","",45,[[]]],[11,"into","","",45,[[]]],[11,"try_from","","",45,[[],["result",4]]],[11,"try_into","","",45,[[],["result",4]]],[11,"borrow","","",45,[[]]],[11,"borrow_mut","","",45,[[]]],[11,"type_id","","",45,[[],["typeid",3]]],[11,"from","nekolib::ds::vec_act_segtree","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","nekolib::ds::vec_segtree","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","nekolib::math::modint","",46,[[]]],[11,"into","","",46,[[]]],[11,"to_owned","","",46,[[]]],[11,"clone_into","","",46,[[]]],[11,"try_from","","",46,[[],["result",4]]],[11,"try_into","","",46,[[],["result",4]]],[11,"borrow","","",46,[[]]],[11,"borrow_mut","","",46,[[]]],[11,"type_id","","",46,[[],["typeid",3]]],[11,"from","nekolib::seq::kmp","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","nekolib::seq::suffix_array","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","nekolib::seq::z_algo","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","nekolib::seq::kmp","",47,[[]]],[11,"into","","",47,[[]]],[11,"into_iter","","",47,[[]]],[11,"try_from","","",47,[[],["result",4]]],[11,"try_into","","",47,[[],["result",4]]],[11,"borrow","","",47,[[]]],[11,"borrow_mut","","",47,[[]]],[11,"type_id","","",47,[[],["typeid",3]]],[11,"from","nekolib::seq::z_algo","",48,[[]]],[11,"into","","",48,[[]]],[11,"into_iter","","",48,[[]]],[11,"try_from","","",48,[[],["result",4]]],[11,"try_into","","",48,[[],["result",4]]],[11,"borrow","","",48,[[]]],[11,"borrow_mut","","",48,[[]]],[11,"type_id","","",48,[[],["typeid",3]]],[11,"from","nekolib::utils::op_add","",49,[[]]],[11,"into","","",49,[[]]],[11,"to_owned","","",49,[[]]],[11,"clone_into","","",49,[[]]],[11,"try_from","","",49,[[],["result",4]]],[11,"try_into","","",49,[[],["result",4]]],[11,"borrow","","",49,[[]]],[11,"borrow_mut","","",49,[[]]],[11,"type_id","","",49,[[],["typeid",3]]],[11,"from","nekolib::utils::op_max","",50,[[]]],[11,"into","","",50,[[]]],[11,"to_owned","","",50,[[]]],[11,"clone_into","","",50,[[]]],[11,"try_from","","",50,[[],["result",4]]],[11,"try_into","","",50,[[],["result",4]]],[11,"borrow","","",50,[[]]],[11,"borrow_mut","","",50,[[]]],[11,"type_id","","",50,[[],["typeid",3]]],[11,"from","nekolib::utils::op_min","",51,[[]]],[11,"into","","",51,[[]]],[11,"to_owned","","",51,[[]]],[11,"clone_into","","",51,[[]]],[11,"try_from","","",51,[[],["result",4]]],[11,"try_into","","",51,[[],["result",4]]],[11,"borrow","","",51,[[]]],[11,"borrow_mut","","",51,[[]]],[11,"type_id","","",51,[[],["typeid",3]]],[11,"from","nekolib::utils::op_mul","",52,[[]]],[11,"into","","",52,[[]]],[11,"to_owned","","",52,[[]]],[11,"clone_into","","",52,[[]]],[11,"try_from","","",52,[[],["result",4]]],[11,"try_into","","",52,[[],["result",4]]],[11,"borrow","","",52,[[]]],[11,"borrow_mut","","",52,[[]]],[11,"type_id","","",52,[[],["typeid",3]]],[11,"from","nekolib::utils::op_roll_hash","",41,[[]]],[11,"into","","",41,[[]]],[11,"to_owned","","",41,[[]]],[11,"clone_into","","",41,[[]]],[11,"try_from","","",41,[[],["result",4]]],[11,"try_into","","",41,[[],["result",4]]],[11,"borrow","","",41,[[]]],[11,"borrow_mut","","",41,[[]]],[11,"type_id","","",41,[[],["typeid",3]]],[11,"from","nekolib::utils::scanner","",43,[[]]],[11,"into","","",43,[[]]],[11,"try_from","","",43,[[],["result",4]]],[11,"try_into","","",43,[[],["result",4]]],[11,"borrow","","",43,[[]]],[11,"borrow_mut","","",43,[[]]],[11,"type_id","","",43,[[],["typeid",3]]],[11,"from","","",53,[[]]],[11,"into","","",53,[[]]],[11,"to_string","","",53,[[],["string",3]]],[11,"try_from","","",53,[[],["result",4]]],[11,"try_into","","",53,[[],["result",4]]],[11,"borrow","","",53,[[]]],[11,"borrow_mut","","",53,[[]]],[11,"type_id","","",53,[[],["typeid",3]]],[11,"act","nekolib::ds::vec_act_segtree","",3,[[]]],[11,"zero","nekolib::math::modint","",46,[[]]],[11,"op","nekolib::utils::op_add","",49,[[]]],[11,"op","nekolib::utils::op_max","",50,[[]]],[11,"op","nekolib::utils::op_min","",51,[[]]],[11,"op","nekolib::utils::op_mul","",52,[[]]],[11,"op","nekolib::utils::op_roll_hash","",41,[[]]],[11,"id","nekolib::utils::op_add","",49,[[]]],[11,"id","nekolib::utils::op_max","",50,[[]]],[11,"id","nekolib::utils::op_min","",51,[[]]],[11,"id","nekolib::utils::op_mul","",52,[[]]],[11,"id","nekolib::utils::op_roll_hash","",41,[[]]],[11,"partial_recip","nekolib::utils::op_add","",49,[[],["option",4]]],[11,"partial_recip","nekolib::utils::op_mul","",52,[[],["option",4]]],[11,"recip","nekolib::utils::op_add","",49,[[]]],[11,"new","nekolib::ds::union_find","",45,[[]]],[11,"len","","",45,[[]]],[11,"unite","","",45,[[]]],[11,"repr","","",45,[[]]],[11,"count","","",45,[[]]],[11,"fold","nekolib::ds::disjoint_sparse_table","",44,[[]]],[11,"fold","nekolib::ds::foldable_deque","",0,[[["rangefull",3]]]],[11,"fold","nekolib::ds::foldable_queue","",1,[[["rangefull",3]]]],[11,"fold","nekolib::ds::vec_act_segtree","",3,[[]]],[11,"fold","nekolib::ds::vec_segtree","",4,[[]]],[11,"fold_bisect","nekolib::ds::vec_act_segtree","",3,[[]]],[11,"fold_bisect","nekolib::ds::vec_segtree","",4,[[]]],[11,"fold_bisect_rev","nekolib::ds::vec_act_segtree","",3,[[]]],[11,"fold_bisect_rev","nekolib::ds::vec_segtree","",4,[[]]],[11,"get_mut","","",4,[[],[["getmutindex",3],["option",4]]]],[11,"one","nekolib::math::modint","",46,[[]]],[11,"mul_recip","","",46,[[]]],[11,"push","nekolib::ds::foldable_queue","",1,[[]]],[11,"push_front","nekolib::ds::foldable_deque","",0,[[]]],[11,"push_back","","",0,[[]]],[11,"push_back","nekolib::ds::foldable_queue","",1,[[]]],[11,"push_back","nekolib::seq::kmp","",5,[[]]],[11,"pop","nekolib::ds::foldable_queue","",1,[[],["option",4]]],[11,"pop_front","nekolib::ds::foldable_deque","",0,[[],["option",4]]],[11,"pop_front","nekolib::ds::foldable_queue","",1,[[],["option",4]]],[11,"pop_back","nekolib::ds::foldable_deque","",0,[[],["option",4]]],[11,"pop_back","nekolib::seq::kmp","",5,[[],["option",4]]],[11,"set_value","nekolib::ds::vec_segtree","",4,[[]]],[11,"from","nekolib::ds::disjoint_sparse_table","",44,[[["vec",3]]]],[11,"from","nekolib::ds::vec_act_segtree","",3,[[["vec",3]]]],[11,"from","nekolib::ds::vec_segtree","",4,[[["vec",3]]]],[11,"from","nekolib::math::modint","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","","",46,[[]]],[11,"from","nekolib::seq::kmp","",5,[[["vec",3]]]],[11,"from","nekolib::seq::suffix_array","",6,[[]]],[11,"from","nekolib::seq::z_algo","",7,[[["vec",3]]]],[11,"from","nekolib::utils::scanner","",43,[[["string",3]]]],[11,"next","nekolib::seq::kmp","",47,[[],["option",4]]],[11,"next","nekolib::seq::z_algo","",48,[[],["option",4]]],[11,"clone","nekolib::ds::interval_set","",2,[[],["intervalset",3]]],[11,"clone","nekolib::ds::vec_act_segtree","",3,[[],["vecactsegtree",3]]],[11,"clone","nekolib::ds::vec_segtree","",4,[[],["vecsegtree",3]]],[11,"clone","nekolib::math::modint","",46,[[],["modint",3]]],[11,"clone","nekolib::seq::kmp","",5,[[],["kmpsearcher",3]]],[11,"clone","nekolib::seq::suffix_array","",6,[[],["suffixarray",3]]],[11,"clone","nekolib::seq::z_algo","",7,[[],["zsearcher",3]]],[11,"clone","nekolib::utils::op_add","",49,[[],["opadd",3]]],[11,"clone","nekolib::utils::op_max","",50,[[],["opmax",3]]],[11,"clone","nekolib::utils::op_min","",51,[[],["opmin",3]]],[11,"clone","nekolib::utils::op_mul","",52,[[],["opmul",3]]],[11,"clone","nekolib::utils::op_roll_hash","",41,[[],["oprollhash",3]]],[11,"default","nekolib::ds::foldable_deque","",0,[[]]],[11,"default","nekolib::ds::foldable_queue","",1,[[]]],[11,"eq","nekolib::ds::interval_set","",2,[[["intervalset",3]]]],[11,"ne","","",2,[[["intervalset",3]]]],[11,"eq","nekolib::math::modint","",46,[[["modint",3]]]],[11,"ne","","",46,[[["modint",3]]]],[11,"eq","nekolib::seq::kmp","",5,[[["kmpsearcher",3]]]],[11,"ne","","",5,[[["kmpsearcher",3]]]],[11,"eq","nekolib::seq::suffix_array","",6,[[["suffixarray",3]]]],[11,"ne","","",6,[[["suffixarray",3]]]],[11,"eq","nekolib::seq::z_algo","",7,[[["zsearcher",3]]]],[11,"ne","","",7,[[["zsearcher",3]]]],[11,"eq","nekolib::utils::op_add","",49,[[["opadd",3]]]],[11,"ne","","",49,[[["opadd",3]]]],[11,"eq","nekolib::utils::op_max","",50,[[["opmax",3]]]],[11,"ne","","",50,[[["opmax",3]]]],[11,"eq","nekolib::utils::op_min","",51,[[["opmin",3]]]],[11,"ne","","",51,[[["opmin",3]]]],[11,"eq","nekolib::utils::op_mul","",52,[[["opmul",3]]]],[11,"ne","","",52,[[["opmul",3]]]],[11,"eq","nekolib::utils::op_roll_hash","",41,[[["oprollhash",3]]]],[11,"ne","","",41,[[["oprollhash",3]]]],[11,"eq","nekolib::utils::scanner","",53,[[["scantupleerror",3]]]],[11,"fmt","nekolib::ds::foldable_deque","",0,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::ds::foldable_queue","",1,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::ds::interval_set","",2,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::math::modint","",46,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::seq::kmp","",5,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::seq::suffix_array","",6,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::seq::z_algo","",7,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_add","",49,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_max","",50,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_min","",51,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_mul","",52,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_roll_hash","",41,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::scanner","",53,[[["formatter",3]],["result",6]]],[11,"fmt","","",53,[[["formatter",3]],["result",6]]],[11,"div","nekolib::math::modint","",46,[[]]],[11,"sub","","",46,[[]]],[11,"add","","",46,[[]]],[11,"mul","","",46,[[]]],[11,"neg","","",46,[[]]],[11,"add_assign","","",46,[[]]],[11,"sub_assign","","",46,[[]]],[11,"mul_assign","","",46,[[]]],[11,"div_assign","","",46,[[]]],[11,"index","nekolib::ds::disjoint_sparse_table","",44,[[]]],[11,"index","nekolib::ds::vec_segtree","",4,[[]]],[11,"index","nekolib::seq::suffix_array","",6,[[]]]],"p":[[3,"FoldableDeque"],[3,"FoldableQueue"],[3,"IntervalSet"],[3,"VecActSegtree"],[3,"VecSegtree"],[3,"KmpSearcher"],[3,"SuffixArray"],[3,"ZSearcher"],[8,"Act"],[8,"MonoidAction"],[8,"Zero"],[8,"AssocVal"],[8,"Magma"],[8,"Identity"],[8,"PartialRecip"],[8,"Recip"],[8,"Ring"],[8,"Field"],[8,"DisjointSet"],[8,"ExpandFront"],[8,"ExpandBack"],[8,"ShrinkFront"],[8,"ShrinkBack"],[8,"ElasticSlice"],[8,"SliceHash"],[8,"Fold"],[8,"FoldBisect"],[8,"FoldBisectRev"],[8,"GetMut"],[8,"Max"],[8,"Min"],[8,"One"],[8,"MulRecip"],[8,"Push"],[8,"PushFront"],[8,"PushBack"],[8,"Pop"],[8,"PopFront"],[8,"PopBack"],[8,"SetValue"],[8,"StatefulPred"],[3,"OpRollHash"],[8,"Scan"],[3,"Scanner"],[3,"DisjointSparseTable"],[3,"UnionFind"],[3,"ModInt"],[3,"Occurrences"],[3,"Occurrences"],[3,"OpAdd"],[3,"OpMax"],[3,"OpMin"],[3,"OpMul"],[3,"ScanTupleError"]]},\
"nekolib_verify":{"doc":"[`nekolib`] の verify に関するもの。","i":[],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);