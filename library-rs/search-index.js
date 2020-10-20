var searchIndex = JSON.parse('{\
"nekolib":{"doc":"ねこちゃんライブラリ。","i":[[0,"algo","nekolib","アルゴリズムたち。",null,null],[5,"bisect","nekolib::algo","二分探索で境界を探す。",null,[[["fn",8]]]],[5,"extremum","","三分探索で極値を探す。",null,[[["range",3]]]],[5,"mo","","Mo\'s algorithm。",null,[[["vec",3],["option",4]],["vec",3]]],[5,"tortoise_hare","","周期検出を行う。",null,[[]]],[5,"window_bisect","","尺取り法で、各始端に対して境界を探す。",null,[[],["vec",3]]],[0,"bisect","","二分探索。",null,null],[5,"bisect","nekolib::algo::bisect","二分探索で境界を探す。",null,[[["fn",8]]]],[0,"extremum","nekolib::algo","三分探索。",null,null],[5,"extremum","nekolib::algo::extremum","三分探索で極値を探す。",null,[[["range",3]]]],[0,"mo","nekolib::algo","Mo\'s algorithm。",null,null],[5,"mo","nekolib::algo::mo","Mo\'s algorithm。",null,[[["vec",3],["option",4]],["vec",3]]],[0,"tortoise_hare","nekolib::algo","周期検出。",null,null],[5,"tortoise_hare","nekolib::algo::tortoise_hare","周期検出を行う。",null,[[]]],[0,"window_bisect","nekolib::algo","尺取り法。",null,null],[5,"window_bisect","nekolib::algo::window_bisect","尺取り法で、各始端に対して境界を探す。",null,[[],["vec",3]]],[0,"ds","nekolib","データ構造たち。",null,null],[3,"FoldableDeque","nekolib::ds","fold 可能両端キュー。",null,null],[3,"FoldableQueue","","fold 可能キュー。",null,null],[3,"UnionFind","","union-find。",null,null],[3,"VecSegtree","","`Vec` ベースのセグ木。",null,null],[3,"GetMutIndex","","",null,null],[0,"foldable_deque","","fold 可能両端キュー。",null,null],[3,"FoldableDeque","nekolib::ds::foldable_deque","fold 可能両端キュー。",null,null],[11,"new","","",0,[[]]],[0,"foldable_queue","nekolib::ds","fold 可能キュー。",null,null],[3,"FoldableQueue","nekolib::ds::foldable_queue","fold 可能キュー。",null,null],[11,"new","","",1,[[]]],[0,"union_find","nekolib::ds","union-find。",null,null],[3,"UnionFind","nekolib::ds::union_find","union-find。",null,null],[0,"vec_segtree","nekolib::ds","`Vec` ベースのセグ木。",null,null],[3,"VecSegtree","nekolib::ds::vec_segtree","`Vec` ベースのセグ木。",null,null],[3,"GetMutIndex","","",null,null],[11,"new","","",2,[[]]],[0,"graph","nekolib","グラフ。",null,null],[5,"dijkstra","nekolib::graph","",null,[[],[["option",4],["vec",3]]]],[0,"dijkstra","","",null,null],[5,"dijkstra","nekolib::graph::dijkstra","",null,[[],[["option",4],["vec",3]]]],[0,"traits","nekolib","トレイトたち。",null,null],[0,"additive","nekolib::traits","加法に関するトレイトたちです。",null,null],[8,"Zero","nekolib::traits::additive","加法の単位元 $0$ を定義する。",null,null],[10,"zero","","加法の単位元 $0$ を返す。",3,[[]]],[8,"AddAssoc","","加法が結合法則を満たすことを示す。",null,null],[8,"AddComm","","加法が交換法則を満たすことを示す。",null,null],[0,"assoc_val","nekolib::traits","型に紐づく値。",null,null],[8,"AssocVal","nekolib::traits::assoc_val","値を返す関数を持つ。",null,null],[10,"get","","",4,[[]]],[0,"binop","nekolib::traits","代数的構造に関するトレイトたちです。",null,null],[8,"Magma","nekolib::traits::binop","マグマ。",null,null],[16,"Set","","集合 $M$ に対応する型。",5,null],[10,"op","","$x \\\\circ y$ を返す。",5,[[]]],[8,"Associative","","結合法則を満たす。",null,null],[8,"Identity","","単位元を持つ。",null,null],[10,"id","","単位元を返す。",6,[[]]],[8,"Commutative","","交換法則を満たす。",null,null],[8,"PartialRecip","","逆元を持つ要素が存在する。",null,null],[10,"partial_recip","","",7,[[],["option",4]]],[8,"Recip","","逆元が常に存在する。",null,null],[11,"recip","","",8,[[]]],[8,"Distributive","","分配法則を満たす。",null,null],[8,"Semigroup","","半群。",null,null],[8,"Monoid","","モノイド。",null,null],[8,"CommutativeMonoid","","可換モノイド。",null,null],[8,"Group","","群。",null,null],[8,"CommutativeGroup","","可換群。",null,null],[8,"Ring","","環。",null,null],[16,"Set","","集合 $R$ に対応する型。",9,null],[16,"Additive","","可換群 $(R, \\\\circ, 0)$ に対応する型。",9,null],[16,"Multiplicative","","モノイド $(R, \\\\ast, 1)$ に対応する型。",9,null],[11,"add","","和 $x \\\\circ y$ を返す。",9,[[]]],[11,"zero","","加法 $\\\\circ$ の単位元 $0$ を返す。",9,[[]]],[11,"neg","","加法 $\\\\circ$ に関する $x$ の逆元 $-x$ を返す。",9,[[]]],[11,"mul","","積 $x \\\\ast y$ を返す。",9,[[]]],[11,"one","","乗法 $\\\\ast$ の単位元 $1$ を返す。",9,[[]]],[8,"CommutativeRing","","可換環。",null,null],[8,"Field","","体。",null,null],[11,"recip","","乗法 $\\\\ast$ における関する $x$ の逆元 $x^{-1}$ を返す。",10,[[]]],[0,"disjoint_set","nekolib::traits","素集合に関するトレイトです。",null,null],[8,"DisjointSet","nekolib::traits::disjoint_set","共通要素を持たない集合族で、併合が可能なもの。",null,null],[10,"new","","集合族を $\\\\{\\\\{0\\\\}, \\\\{1\\\\}, \\\\dots, \\\\{n-1\\\\}\\\\}$ で初期化する。",11,[[]]],[10,"len","","集合族全体に含まれる要素数 $n$ を返す。",11,[[]]],[11,"is_empty","","集合族が空であれば `true` を返す。",11,[[]]],[10,"unite","","$u$ を含む集合と $v$ を含む集合を併合する。 集合族に変化があれば `true` を返す。 $u$ と…",11,[[]]],[10,"repr","","$u$ を含む集合の代表元を返す。",11,[[]]],[10,"count","","$u$ を含む集合の要素数を返す。",11,[[]]],[11,"equiv","","$u$ と $v$ が同じ集合に含まれていれば `true` を返す。",11,[[]]],[11,"subset","","$u$ を含む集合の要素を列挙する。",11,[[],["vec",3]]],[0,"elastic_slice","nekolib::traits","",null,null],[8,"ExpandFront","nekolib::traits::elastic_slice","",null,null],[10,"expand_front","","",12,[[]]],[8,"ExpandBack","","",null,null],[10,"expand_back","","",13,[[]]],[8,"ShrinkFront","","",null,null],[10,"shrink_front","","",14,[[]]],[8,"ShrinkBack","","",null,null],[10,"shrink_back","","",15,[[]]],[8,"ElasticSlice","","",null,null],[10,"reset","","",16,[[]]],[10,"full_len","","",16,[[]]],[10,"start","","",16,[[]]],[10,"end","","",16,[[]]],[11,"len","","",16,[[]]],[11,"is_empty","","",16,[[]]],[8,"SliceHash","","",null,null],[16,"Salt","","",17,null],[16,"Hashed","","",17,null],[10,"hash","","",17,[[]]],[0,"fold","nekolib::traits","区間和に関するトレイトです。",null,null],[8,"Fold","nekolib::traits::fold","区間和を求める。",null,null],[16,"Output","","",18,null],[10,"fold","","`r` で指定される区間の和を返す。",18,[[]]],[0,"fold_bisect","nekolib::traits","区間和の二分探索に関するトレイトたちです。",null,null],[8,"FoldBisect","nekolib::traits::fold_bisect","左端を固定したときの区間和に関する境界を求める。",null,null],[16,"Folded","","区間和に関するモノイド $(M, \\\\circ, e)$。",19,null],[10,"fold_bisect","","Examples ``` use nekolib::ds::VecSegtree; use…",19,[[],["option",4]]],[8,"FoldBisectRev","","右端を固定したときの区間和に関する境界を求める。",null,null],[16,"Folded","","区間和に関するモノイド $(M, \\\\circ, e)$。",20,null],[10,"fold_bisect_rev","","Examples ``` use nekolib::ds::VecSegtree; use…",20,[[],["option",4]]],[0,"get_mut","nekolib::traits","",null,null],[8,"GetMut","nekolib::traits::get_mut","",null,null],[16,"Output","","",21,null],[10,"get_mut","","",21,[[],["option",4]]],[0,"max","nekolib::traits","最大元に関するトレイトです。",null,null],[8,"Max","nekolib::traits::max","最大元を持つ。",null,null],[10,"max","","最大元を返す。",22,[[]]],[0,"min","nekolib::traits","最小元に関するトレイトです。",null,null],[8,"Min","nekolib::traits::min","最小元を持つ。",null,null],[10,"min","","最小元を返す。",23,[[]]],[0,"multiplicative","nekolib::traits","乗法に関するトレイトたちです。",null,null],[8,"One","nekolib::traits::multiplicative","乗法の単位元 $1$ を定義する。",null,null],[10,"one","","乗法の単位元 $1$ を返す。",24,[[]]],[8,"MulRecip","","乗法の逆元を定義する。",null,null],[16,"Output","","返り値の型。",25,null],[10,"mul_recip","","乗法における $x$ の逆元 $x^{-1}$ を返す。",25,[[]]],[8,"MulAssoc","","乗法が結合法則を満たすことを示す。",null,null],[8,"MulComm","","乗法が交換法則を満たすことを示す。",null,null],[0,"push_pop","nekolib::traits","",null,null],[8,"Push","nekolib::traits::push_pop","",null,null],[16,"Input","","",26,null],[10,"push","","",26,[[]]],[8,"PushFront","","",null,null],[16,"Input","","",27,null],[10,"push_front","","",27,[[]]],[8,"PushBack","","",null,null],[16,"Input","","",28,null],[10,"push_back","","",28,[[]]],[8,"Pop","","",null,null],[16,"Output","","",29,null],[10,"pop","","",29,[[],["option",4]]],[8,"PopFront","","",null,null],[16,"Output","","",30,null],[10,"pop_front","","",30,[[],["option",4]]],[8,"PopBack","","",null,null],[16,"Output","","",31,null],[10,"pop_back","","",31,[[],["option",4]]],[0,"range_bounds","nekolib::traits","区間に関するトレイトです。",null,null],[8,"StartBounded","nekolib::traits::range_bounds","左側が有界である区間。",null,null],[8,"StartInclusive","","左側が閉である区間。",null,null],[8,"StartUnbounded","","左側が非有界である区間。",null,null],[8,"EndBounded","","右側が有界である区間。",null,null],[8,"EndExclusive","","右側が開である区間。",null,null],[8,"EndInclusive","","右側が閉である区間。",null,null],[8,"EndUnbounded","","右側が非有界である区間。",null,null],[0,"set_value","nekolib::traits","値の代入に関するトレイトです。",null,null],[8,"SetValue","nekolib::traits::set_value","値の代入ができることを示す。",null,null],[16,"Input","","代入される型。",32,null],[10,"set_value","","`i` で指定される要素に `x` を代入する。",32,[[]]],[8,"Zero","nekolib::traits","加法の単位元 $0$ を定義する。",null,null],[10,"zero","","加法の単位元 $0$ を返す。",3,[[]]],[8,"AddAssoc","","加法が結合法則を満たすことを示す。",null,null],[8,"AddComm","","加法が交換法則を満たすことを示す。",null,null],[8,"AssocVal","","値を返す関数を持つ。",null,null],[10,"get","","",4,[[]]],[8,"Magma","","マグマ。",null,null],[16,"Set","","集合 $M$ に対応する型。",5,null],[10,"op","","$x \\\\circ y$ を返す。",5,[[]]],[8,"Associative","","結合法則を満たす。",null,null],[8,"Identity","","単位元を持つ。",null,null],[10,"id","","単位元を返す。",6,[[]]],[8,"Commutative","","交換法則を満たす。",null,null],[8,"PartialRecip","","逆元を持つ要素が存在する。",null,null],[10,"partial_recip","","",7,[[],["option",4]]],[8,"Recip","","逆元が常に存在する。",null,null],[11,"recip","","",8,[[]]],[8,"Distributive","","分配法則を満たす。",null,null],[8,"Semigroup","","半群。",null,null],[8,"Monoid","","モノイド。",null,null],[8,"CommutativeMonoid","","可換モノイド。",null,null],[8,"Group","","群。",null,null],[8,"CommutativeGroup","","可換群。",null,null],[8,"Ring","","環。",null,null],[16,"Set","","集合 $R$ に対応する型。",9,null],[16,"Additive","","可換群 $(R, \\\\circ, 0)$ に対応する型。",9,null],[16,"Multiplicative","","モノイド $(R, \\\\ast, 1)$ に対応する型。",9,null],[11,"add","","和 $x \\\\circ y$ を返す。",9,[[]]],[11,"zero","","加法 $\\\\circ$ の単位元 $0$ を返す。",9,[[]]],[11,"neg","","加法 $\\\\circ$ に関する $x$ の逆元 $-x$ を返す。",9,[[]]],[11,"mul","","積 $x \\\\ast y$ を返す。",9,[[]]],[11,"one","","乗法 $\\\\ast$ の単位元 $1$ を返す。",9,[[]]],[8,"CommutativeRing","","可換環。",null,null],[8,"Field","","体。",null,null],[11,"recip","","乗法 $\\\\ast$ における関する $x$ の逆元 $x^{-1}$ を返す。",10,[[]]],[8,"DisjointSet","","共通要素を持たない集合族で、併合が可能なもの。",null,null],[10,"new","","集合族を $\\\\{\\\\{0\\\\}, \\\\{1\\\\}, \\\\dots, \\\\{n-1\\\\}\\\\}$ で初期化する。",11,[[]]],[10,"len","","集合族全体に含まれる要素数 $n$ を返す。",11,[[]]],[11,"is_empty","","集合族が空であれば `true` を返す。",11,[[]]],[10,"unite","","$u$ を含む集合と $v$ を含む集合を併合する。 集合族に変化があれば `true` を返す。 $u$ と…",11,[[]]],[10,"repr","","$u$ を含む集合の代表元を返す。",11,[[]]],[10,"count","","$u$ を含む集合の要素数を返す。",11,[[]]],[11,"equiv","","$u$ と $v$ が同じ集合に含まれていれば `true` を返す。",11,[[]]],[11,"subset","","$u$ を含む集合の要素を列挙する。",11,[[],["vec",3]]],[8,"ExpandFront","","",null,null],[10,"expand_front","","",12,[[]]],[8,"ExpandBack","","",null,null],[10,"expand_back","","",13,[[]]],[8,"ShrinkFront","","",null,null],[10,"shrink_front","","",14,[[]]],[8,"ShrinkBack","","",null,null],[10,"shrink_back","","",15,[[]]],[8,"ElasticSlice","","",null,null],[10,"reset","","",16,[[]]],[10,"full_len","","",16,[[]]],[10,"start","","",16,[[]]],[10,"end","","",16,[[]]],[11,"len","","",16,[[]]],[11,"is_empty","","",16,[[]]],[8,"SliceHash","","",null,null],[16,"Salt","","",17,null],[16,"Hashed","","",17,null],[10,"hash","","",17,[[]]],[8,"Fold","","区間和を求める。",null,null],[16,"Output","","",18,null],[10,"fold","","`r` で指定される区間の和を返す。",18,[[]]],[8,"FoldBisect","","左端を固定したときの区間和に関する境界を求める。",null,null],[16,"Folded","","区間和に関するモノイド $(M, \\\\circ, e)$。",19,null],[10,"fold_bisect","","Examples ``` use nekolib::ds::VecSegtree; use…",19,[[],["option",4]]],[8,"FoldBisectRev","","右端を固定したときの区間和に関する境界を求める。",null,null],[16,"Folded","","区間和に関するモノイド $(M, \\\\circ, e)$。",20,null],[10,"fold_bisect_rev","","Examples ``` use nekolib::ds::VecSegtree; use…",20,[[],["option",4]]],[8,"GetMut","","",null,null],[16,"Output","","",21,null],[10,"get_mut","","",21,[[],["option",4]]],[8,"Max","","最大元を持つ。",null,null],[10,"max","","最大元を返す。",22,[[]]],[8,"Min","","最小元を持つ。",null,null],[10,"min","","最小元を返す。",23,[[]]],[8,"One","","乗法の単位元 $1$ を定義する。",null,null],[10,"one","","乗法の単位元 $1$ を返す。",24,[[]]],[8,"MulRecip","","乗法の逆元を定義する。",null,null],[16,"Output","","返り値の型。",25,null],[10,"mul_recip","","乗法における $x$ の逆元 $x^{-1}$ を返す。",25,[[]]],[8,"MulAssoc","","乗法が結合法則を満たすことを示す。",null,null],[8,"MulComm","","乗法が交換法則を満たすことを示す。",null,null],[8,"Push","","",null,null],[16,"Input","","",26,null],[10,"push","","",26,[[]]],[8,"PushFront","","",null,null],[16,"Input","","",27,null],[10,"push_front","","",27,[[]]],[8,"PushBack","","",null,null],[16,"Input","","",28,null],[10,"push_back","","",28,[[]]],[8,"Pop","","",null,null],[16,"Output","","",29,null],[10,"pop","","",29,[[],["option",4]]],[8,"PopFront","","",null,null],[16,"Output","","",30,null],[10,"pop_front","","",30,[[],["option",4]]],[8,"PopBack","","",null,null],[16,"Output","","",31,null],[10,"pop_back","","",31,[[],["option",4]]],[8,"StartBounded","","左側が有界である区間。",null,null],[8,"StartInclusive","","左側が閉である区間。",null,null],[8,"StartUnbounded","","左側が非有界である区間。",null,null],[8,"EndBounded","","右側が有界である区間。",null,null],[8,"EndExclusive","","右側が開である区間。",null,null],[8,"EndInclusive","","右側が閉である区間。",null,null],[8,"EndUnbounded","","右側が非有界である区間。",null,null],[8,"SetValue","","値の代入ができることを示す。",null,null],[16,"Input","","代入される型。",32,null],[10,"set_value","","`i` で指定される要素に `x` を代入する。",32,[[]]],[0,"utils","nekolib","便利ちゃんたち。",null,null],[3,"ModInt","nekolib::utils","",null,null],[3,"OpAdd","","和を返す演算を持つ。",null,null],[3,"OpMax","","最大値を返す演算を持つ。",null,null],[3,"OpMin","","最小値を返す演算を持つ。",null,null],[3,"OpMul","","積を返す演算を持つ。",null,null],[3,"OpRollHash","","文字列連結をローリングハッシュで行う演算を持つ。",null,null],[3,"Scanner","","パーサ。",null,null],[3,"ScanTupleError","","",null,null],[5,"bounds_within","","区間を配列サイズに収まるように丸める。",null,[[["rangebounds",8]],["range",3]]],[0,"buf_range","","配列上の区間に関する関数。",null,null],[5,"bounds_within","nekolib::utils::buf_range","区間を配列サイズに収まるように丸める。",null,[[["rangebounds",8]],["range",3]]],[0,"modint","nekolib::utils","法 $m$ での演算をする。",null,null],[3,"ModInt","nekolib::utils::modint","",null,null],[0,"op_add","nekolib::utils","加法に関する wrapper クラス。",null,null],[3,"OpAdd","nekolib::utils::op_add","和を返す演算を持つ。",null,null],[0,"op_max","nekolib::utils","最大値に関する wrapper クラス。",null,null],[3,"OpMax","nekolib::utils::op_max","最大値を返す演算を持つ。",null,null],[0,"op_min","nekolib::utils","最小値に関する wrapper クラス。",null,null],[3,"OpMin","nekolib::utils::op_min","最小値を返す演算を持つ。",null,null],[0,"op_mul","nekolib::utils","乗法に関する wrapper クラス。",null,null],[3,"OpMul","nekolib::utils::op_mul","積を返す演算を持つ。",null,null],[0,"op_roll_hash","nekolib::utils","ローリングハッシュに関する wrapper クラス。",null,null],[3,"OpRollHash","nekolib::utils::op_roll_hash","文字列連結をローリングハッシュで行う演算を持つ。",null,null],[11,"val_from","","",33,[[]]],[0,"scanner","nekolib::utils","パーサ。",null,null],[3,"Scanner","nekolib::utils::scanner","パーサ。",null,null],[3,"ScanTupleError","","",null,null],[8,"Scan","","",null,null],[16,"Err","","",34,null],[10,"scan","","",34,[[]]],[11,"from_stdin","","",35,[[],[["result",4],["error",3]]]],[11,"next","","",35,[[],[["result",4],["scan",8]]]],[11,"next_m1","","",35,[[],["result",4]]],[11,"next_n","","",35,[[],[["result",4],["vec",3]]]],[11,"get_while","","",35,[[]]],[11,"get_line","","",35,[[]]],[11,"ignore","","",35,[[]]],[11,"ignore_while","","",35,[[]]],[8,"Scan","nekolib::utils","",null,null],[16,"Err","","",34,null],[10,"scan","","",34,[[]]],[14,"impl_assoc_val","nekolib","",null,null],[14,"impl_mod_int","","",null,null],[11,"from","nekolib::ds::foldable_deque","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","nekolib::ds::foldable_queue","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","nekolib::ds::union_find","",36,[[]]],[11,"into","","",36,[[]]],[11,"try_from","","",36,[[],["result",4]]],[11,"try_into","","",36,[[],["result",4]]],[11,"borrow","","",36,[[]]],[11,"borrow_mut","","",36,[[]]],[11,"type_id","","",36,[[],["typeid",3]]],[11,"from","nekolib::ds::vec_segtree","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",37,[[]]],[11,"into","","",37,[[]]],[11,"try_from","","",37,[[],["result",4]]],[11,"try_into","","",37,[[],["result",4]]],[11,"borrow","","",37,[[]]],[11,"borrow_mut","","",37,[[]]],[11,"type_id","","",37,[[],["typeid",3]]],[11,"from","nekolib::utils::modint","",38,[[]]],[11,"into","","",38,[[]]],[11,"to_owned","","",38,[[]]],[11,"clone_into","","",38,[[]]],[11,"try_from","","",38,[[],["result",4]]],[11,"try_into","","",38,[[],["result",4]]],[11,"borrow","","",38,[[]]],[11,"borrow_mut","","",38,[[]]],[11,"type_id","","",38,[[],["typeid",3]]],[11,"from","nekolib::utils::op_add","",39,[[]]],[11,"into","","",39,[[]]],[11,"to_owned","","",39,[[]]],[11,"clone_into","","",39,[[]]],[11,"try_from","","",39,[[],["result",4]]],[11,"try_into","","",39,[[],["result",4]]],[11,"borrow","","",39,[[]]],[11,"borrow_mut","","",39,[[]]],[11,"type_id","","",39,[[],["typeid",3]]],[11,"from","nekolib::utils::op_max","",40,[[]]],[11,"into","","",40,[[]]],[11,"to_owned","","",40,[[]]],[11,"clone_into","","",40,[[]]],[11,"try_from","","",40,[[],["result",4]]],[11,"try_into","","",40,[[],["result",4]]],[11,"borrow","","",40,[[]]],[11,"borrow_mut","","",40,[[]]],[11,"type_id","","",40,[[],["typeid",3]]],[11,"from","nekolib::utils::op_min","",41,[[]]],[11,"into","","",41,[[]]],[11,"to_owned","","",41,[[]]],[11,"clone_into","","",41,[[]]],[11,"try_from","","",41,[[],["result",4]]],[11,"try_into","","",41,[[],["result",4]]],[11,"borrow","","",41,[[]]],[11,"borrow_mut","","",41,[[]]],[11,"type_id","","",41,[[],["typeid",3]]],[11,"from","nekolib::utils::op_mul","",42,[[]]],[11,"into","","",42,[[]]],[11,"to_owned","","",42,[[]]],[11,"clone_into","","",42,[[]]],[11,"try_from","","",42,[[],["result",4]]],[11,"try_into","","",42,[[],["result",4]]],[11,"borrow","","",42,[[]]],[11,"borrow_mut","","",42,[[]]],[11,"type_id","","",42,[[],["typeid",3]]],[11,"from","nekolib::utils::op_roll_hash","",33,[[]]],[11,"into","","",33,[[]]],[11,"to_owned","","",33,[[]]],[11,"clone_into","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"from","nekolib::utils::scanner","",35,[[]]],[11,"into","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"from","","",43,[[]]],[11,"into","","",43,[[]]],[11,"to_string","","",43,[[],["string",3]]],[11,"try_from","","",43,[[],["result",4]]],[11,"try_into","","",43,[[],["result",4]]],[11,"borrow","","",43,[[]]],[11,"borrow_mut","","",43,[[]]],[11,"type_id","","",43,[[],["typeid",3]]],[11,"zero","nekolib::utils::modint","",38,[[]]],[11,"op","nekolib::utils::op_add","",39,[[]]],[11,"op","nekolib::utils::op_max","",40,[[]]],[11,"op","nekolib::utils::op_min","",41,[[]]],[11,"op","nekolib::utils::op_mul","",42,[[]]],[11,"op","nekolib::utils::op_roll_hash","",33,[[]]],[11,"id","nekolib::utils::op_add","",39,[[]]],[11,"id","nekolib::utils::op_max","",40,[[]]],[11,"id","nekolib::utils::op_min","",41,[[]]],[11,"id","nekolib::utils::op_mul","",42,[[]]],[11,"id","nekolib::utils::op_roll_hash","",33,[[]]],[11,"partial_recip","nekolib::utils::op_add","",39,[[],["option",4]]],[11,"partial_recip","nekolib::utils::op_mul","",42,[[],["option",4]]],[11,"recip","nekolib::utils::op_add","",39,[[]]],[11,"new","nekolib::ds::union_find","",36,[[]]],[11,"len","","",36,[[]]],[11,"unite","","",36,[[]]],[11,"repr","","",36,[[]]],[11,"count","","",36,[[]]],[11,"fold","nekolib::ds::foldable_deque","",0,[[["rangefull",3]]]],[11,"fold","nekolib::ds::foldable_queue","",1,[[["rangefull",3]]]],[11,"fold","nekolib::ds::vec_segtree","",2,[[]]],[11,"fold_bisect","","",2,[[],["option",4]]],[11,"fold_bisect_rev","","",2,[[],["option",4]]],[11,"get_mut","","",2,[[],[["getmutindex",3],["option",4]]]],[11,"one","nekolib::utils::modint","",38,[[]]],[11,"mul_recip","","",38,[[]]],[11,"push","nekolib::ds::foldable_queue","",1,[[]]],[11,"push_front","nekolib::ds::foldable_deque","",0,[[]]],[11,"push_back","","",0,[[]]],[11,"push_back","nekolib::ds::foldable_queue","",1,[[]]],[11,"pop","","",1,[[],["option",4]]],[11,"pop_front","nekolib::ds::foldable_deque","",0,[[],["option",4]]],[11,"pop_front","nekolib::ds::foldable_queue","",1,[[],["option",4]]],[11,"pop_back","nekolib::ds::foldable_deque","",0,[[],["option",4]]],[11,"set_value","nekolib::ds::vec_segtree","",2,[[]]],[11,"drop","","",37,[[]]],[11,"from","","",2,[[["vec",3]]]],[11,"from","nekolib::utils::modint","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","","",38,[[]]],[11,"from","nekolib::utils::scanner","",35,[[["string",3]]]],[11,"clone","nekolib::ds::vec_segtree","",2,[[],["vecsegtree",3]]],[11,"clone","nekolib::utils::modint","",38,[[],["modint",3]]],[11,"clone","nekolib::utils::op_add","",39,[[],["opadd",3]]],[11,"clone","nekolib::utils::op_max","",40,[[],["opmax",3]]],[11,"clone","nekolib::utils::op_min","",41,[[],["opmin",3]]],[11,"clone","nekolib::utils::op_mul","",42,[[],["opmul",3]]],[11,"clone","nekolib::utils::op_roll_hash","",33,[[],["oprollhash",3]]],[11,"default","nekolib::ds::foldable_deque","",0,[[]]],[11,"default","nekolib::ds::foldable_queue","",1,[[]]],[11,"eq","nekolib::utils::modint","",38,[[["modint",3]]]],[11,"ne","","",38,[[["modint",3]]]],[11,"eq","nekolib::utils::op_add","",39,[[["opadd",3]]]],[11,"ne","","",39,[[["opadd",3]]]],[11,"eq","nekolib::utils::op_max","",40,[[["opmax",3]]]],[11,"ne","","",40,[[["opmax",3]]]],[11,"eq","nekolib::utils::op_min","",41,[[["opmin",3]]]],[11,"ne","","",41,[[["opmin",3]]]],[11,"eq","nekolib::utils::op_mul","",42,[[["opmul",3]]]],[11,"ne","","",42,[[["opmul",3]]]],[11,"eq","nekolib::utils::op_roll_hash","",33,[[["oprollhash",3]]]],[11,"ne","","",33,[[["oprollhash",3]]]],[11,"eq","nekolib::utils::scanner","",43,[[["scantupleerror",3]]]],[11,"deref","nekolib::ds::vec_segtree","",37,[[]]],[11,"deref_mut","","",37,[[]]],[11,"fmt","nekolib::ds::foldable_deque","",0,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::ds::foldable_queue","",1,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::modint","",38,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_add","",39,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_max","",40,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_min","",41,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_mul","",42,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::op_roll_hash","",33,[[["formatter",3]],["result",6]]],[11,"fmt","nekolib::utils::scanner","",43,[[["formatter",3]],["result",6]]],[11,"fmt","","",43,[[["formatter",3]],["result",6]]],[11,"div","nekolib::utils::modint","",38,[[]]],[11,"sub","","",38,[[]]],[11,"add","","",38,[[]]],[11,"mul","","",38,[[]]],[11,"neg","","",38,[[]]],[11,"add_assign","","",38,[[]]],[11,"sub_assign","","",38,[[]]],[11,"mul_assign","","",38,[[]]],[11,"div_assign","","",38,[[]]],[11,"index","nekolib::ds::vec_segtree","",2,[[]]]],"p":[[3,"FoldableDeque"],[3,"FoldableQueue"],[3,"VecSegtree"],[8,"Zero"],[8,"AssocVal"],[8,"Magma"],[8,"Identity"],[8,"PartialRecip"],[8,"Recip"],[8,"Ring"],[8,"Field"],[8,"DisjointSet"],[8,"ExpandFront"],[8,"ExpandBack"],[8,"ShrinkFront"],[8,"ShrinkBack"],[8,"ElasticSlice"],[8,"SliceHash"],[8,"Fold"],[8,"FoldBisect"],[8,"FoldBisectRev"],[8,"GetMut"],[8,"Max"],[8,"Min"],[8,"One"],[8,"MulRecip"],[8,"Push"],[8,"PushFront"],[8,"PushBack"],[8,"Pop"],[8,"PopFront"],[8,"PopBack"],[8,"SetValue"],[3,"OpRollHash"],[8,"Scan"],[3,"Scanner"],[3,"UnionFind"],[3,"GetMutIndex"],[3,"ModInt"],[3,"OpAdd"],[3,"OpMax"],[3,"OpMin"],[3,"OpMul"],[3,"ScanTupleError"]]},\
"nekolib_verify":{"doc":"[`nekolib`] の verify に関するもの。","i":[],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);